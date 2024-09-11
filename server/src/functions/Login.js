import userModel from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET;

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(409)
      .json({ error: "É necessário ter um email e uma senha preenchidos" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(409).json({ error: "Não foi possível fazer login" });
    }

    const checkPasswordHash = await bcrypt.compare(password, user.password);
    if (!checkPasswordHash) {
      return res.status(409).json({ error: "Não foi possível fazer login" });
    }

    const payload = {
      _id: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, secret, {
      expiresIn: "7d",
    });

    const sevenDays = 1000 * 60 * 60 * 24 * 7;

    const cookieOptions = {
      httpOnly: true,
      maxAge: sevenDays,
      secure: true,
    };

    res
      .status(200)
      .cookie("access_token", `Bearer ${token}`, cookieOptions)
      .json({ msg: "Login Successfull", token });
  } catch (error) {
    res.status(500).json({
      error: "Não foi possível fazer login no momento.",
      details: error.message,
    });
  }
};
