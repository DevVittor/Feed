import freelaModel from "../models/freelaModel.js";
import path from "node:path";
import fs from "node:fs";
import removeAccents from "remove-accents";
import sharp from "sharp";
import userModel from "../models/userModel.js";

export const registerFreela = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res
      .status(404)
      .json({ error: "Não foi possível identificar o usuário" });
  }

  const avatar = req.file.buffer;
  if (!avatar) {
    return res.status(404).json({ error: "É necessário ter uma imagem" });
  }

  const { name, lastname, skills, about } = req.body;
  if (!name || !lastname || !skills || !about) {
    return res.status(404).json({
      error: "É necessário ter o campo do formulário preenchido corretamente",
    });
  }

  try {
    const user = await userModel.findById(userId);
    if (!user || user.role !== "user") {
      return res.status(409).json({ error: "Não foi possível prosseguir" });
    }

    const fullName = removeAccents(name + lastname)
      .toLowerCase()
      .trim();

    const rota = path.join("src/uploads");

    if (!fs.existsSync(rota)) {
      fs.mkdirSync(rota, { recursive: true });
    }

    const avatarPath = `${fullName}.webp`;

    const filePath = path.join(rota, avatarPath);

    const slug = `${fullName}_${Date.now()}_${Math.round(Math.random() * 1e9)}`;

    await sharp(avatar)
      .resize({ height: 100, width: 100, fit: "cover" })
      .toFormat("webp")
      .toFile(filePath);

    await freelaModel.create({
      userId,
      avatar: filePath,
      name,
      lastname,
      slug,
      skills,
      about,
    });

    await userModel.findByIdAndUpdate(userId, {
      $set: { role: "freela", proposal: 10 },
    });

    res.status(201).json({ msg: "Freela Created" });
  } catch (error) {
    res.status(500).json({
      error:
        "Não foi possível receber os dados necessários para criar uma conta de freelancer",
      details: error.message,
    });
  }
};
