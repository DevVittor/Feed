import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const adminRegistered = async () => {
  const email = process.env.EMAIL_ADMIN;
  const user = await userModel.findOne({ role: "admin" });
  if (user) {
    return console.log("Já tem um admin cadastrado");
  }
  try {
    const countAdmin = await userModel.countDocuments({ role: "admin" });

    if (countAdmin > 1) {
      return console.log("Não é permitido mais de um admin");
    }

    const admin = await userModel.findOne({ email });
    if (admin) {
      return console.log("Já tem um admin");
    }

    const passwordAdmin = process.env.PASSWORD_ADMIN;
    const generationPasswordHashAdmin = await bcrypt.hash(passwordAdmin, 10);

    await userModel.create({
      username: process.env.USERNAME_ADMIN,
      email,
      password: generationPasswordHashAdmin,
      role: "admin",
    });

    console.log("Admin Criado com sucesso!");
  } catch (error) {
    console.log(
      "Não foi possível verificar se existe um admin cadastrado",
      error.message
    );
  }
};
