import userModel from "../models/userModel.js";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
dotenv.config();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const secret = process.env.JWT_SECRET;

export const registerNewUser = [
  async (req, res, next) => {
    const validatorInput = [
      body("email")
        .isEmpty()
        .isEmail()
        .isString()
        .withMessage(
          "É necessário ter o email preenchido corretamente no formulário"
        ),
      body("password")
        .isEmpty()
        .isString()
        .withMessage(
          "É necessário ter uma senha preenchida corretamente no formulário"
        ),
    ];
    validatorInput.forEach((validation) => validation.run(req));
    next();
  },

  async (req, res) => {
    // Checa se há erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        error: "É preciso ter todos os campos do formulário preenchido",
      });
    }

    try {
      const emailRegistered = await userModel.findOne({ email });
      if (emailRegistered) {
        return res
          .status(409)
          .json({ error: "Não foi possível registrar o usuário" });
      }

      const generationPasswordHash = await bcrypt.hash(password, 10);

      const user = await userModel.create({
        email,
        password: generationPasswordHash,
      });
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
        secure: false,
        sameSite: "None",
      };

      res
        .status(201)
        .cookie("access_token", `Bearer ${token}`, cookieOptions)
        .json({ msg: "Usuário criado", token });
    } catch (error) {
      res.status(500).json({
        error: "Não foi possível registrar um novo usuário.",
        details: error.message,
      });
    }
  },
];
