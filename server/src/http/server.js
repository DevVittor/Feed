import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import router from "../routes/v1/index.js";
import { adminRegistered } from "../utils/createAdmin.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3333", // ou a origem do seu frontend
    credentials: true, // Permitir envio de cookies
  })
);
app.disable("x-powered-by");

app.use("/api/v1", (req, _, next) => {
  console.log(`Path: ${req.path} | Method: ${req.method}`);
  next();
});

app.use("/api/v1", router);

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.DB_MONGO,
  })
  .then(() => {
    adminRegistered();
    console.log("Banco de dados sincronizado.");
  })
  .catch((error) => {
    console.log(
      `Não foi possível sincronizar com o banco de dados. ${error.message}`
    );
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
