import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;
export const validationToken = (req, res, next) => {
  console.log(req.headers);

  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ error: "Token não foi fornecido" });
  }

  const checkToken = token.replace("Bearer", "").trim();
  console.log(checkToken);

  jwt.verify(checkToken, secret, (error, decoded) => {
    if (error) {
      return res.status(500).json({ error: "Seu token é inválido", error });
      console.log(error);
    }
    // Se o token for válido, armazena os dados decodificados no req
    req.user = decoded;
    console.log(req.user);

    // Continua para o próximo middleware ou função de rota
    next();
  });
};
