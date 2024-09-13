import userModel from "../models/userModel.js";
import postModel from "../models/postModel.js";
import { body, validationResult } from "express-validator";

export const searchPost = async (req, res) => {
  const { search } = req.query;

  try {
    const post = await postModel.findOne({
      title: { $regex: search, $options: "i" },
      blocked: false,
    });

    if (posts.length === 0) {
      return res.status(404).json({ error: "Não encontrei esse post" });
    }

    res.status(200).json({ result: post });
  } catch (error) {
    res.status(500).json({
      error: "Não foi possível buscar o post no momento",
      details: error.message,
    });
  }
};

export const unlockPost = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res
      .status(404)
      .json({ error: "Não foi possível identificar o usuário" });
  }
  const { postId, reason } = req.body;
  if (!postId) {
    return res.status(404).json({ error: "Não foi possível localizar o post" });
  }
  if (!reason) {
    return res
      .status(404)
      .json({ error: "É necessário ter um motivo pelo desbloqueio" });
  }
  //reason -> Motivo
  const user = await userModel.findById(userId);
  if (!user || user.role !== "admin") {
    return res
      .status(409)
      .json({ error: "Não foi possível desbloquear o post" });
  }
  const post = await postModel.findById(postId);
  if (!post || post.blocked === false) {
    res
      .status(409)
      .json({ error: "Não foi possíve localizar e desbloquear o post" });
  }

  await postModel.findByIdAndUpdate(postId, { $set: { blocked: false } });
  res
    .status(200)
    .json({ msg: "O post: ${post.title} foi desbloqueado.", reason });
};

export const blockPost = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res
      .status(404)
      .json({ error: "Não foi possível identificar o usuário" });
  }

  const { postId, reason } = req.body;
  //reason -> Motivo
  if (!postId) {
    return res.status(404).json({ error: "Não foi possível localizar o post" });
  }

  try {
    const user = await userModel.findById(userId);

    if (!user || user.role !== "admin") {
      return res
        .status(409)
        .json({ error: "Você não tem permissão para bloquear o post" });
    }

    const post = await postModel.findById(postId);

    if (!post || post.blocked === true) {
      return res
        .status(409)
        .json({ error: "Não foi possível bloquear o post" });
    }

    await postModel.findById(postId, { $set: { blocked: true } });

    res
      .status(200)
      .json({ msg: "O post sobre: ${post.title} foi bloqueado.", reason });
  } catch (error) {
    res.status(500).json({
      error: "Não foi possível bloquear o post no momento.",
      details: error.message,
    });
  }
};

export const listPost = async (req, res) => {
  try {
    const countPost = await postModel.countDocuments();
    if (countPost <= 0) {
      return res
        .status(404)
        .json({ error: "Não tem nenhum post criado no momento" });
    }

    const post = await postModel.find({ blocked: false });
    if (!post) {
      return res.status(404).json({ error: "Não foi encontrado nenhum post" });
    }
    res.status(200).json({ msg: "Aqui está a lista de post", list: post });
  } catch (error) {
    res.status(500).json({
      error: "Não foi possível mostrar a lista de posts",
      details: error.message,
    });
  }
};

export const detailsPost = async (req, res) => {
  const { postId } = req.query;
  if (!postId) {
    return res
      .status(404)
      .json({ error: "Não foi possíve identificar o post" });
  }

  try {
    const post = await postModel.findById(postId);
    if (!post || post.blocked === true) {
      return res
        .status(404)
        .json({ error: "Não foi possível localizar o post" });
    }

    res.status(200).json({ msg: "Post encontrado", result: post });
  } catch (error) {
    res.status(500).json({
      error:
        "Não foi possível receber os dados necessários para mostrar os detalhes do post",
      details: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const userId = req.user?._id; // Acessando _id de req.user
  console.log("UserId: ", userId);
  if (!userId) {
    return res.status(404).json({ error: "Não tem userId" });
  }
  const { author, title, details, price, level, skills, category } = req.body;
  console.log("Body: ", req.body);
  if (
    !author ||
    !title ||
    !details ||
    !price ||
    !price.min ||
    !price.max ||
    !skills ||
    !category
  ) {
    return res.status(409).json({ error: "Falta um algum item do body" });
  }
  try {
    const user = await userModel.findById(userId);
    if (
      !user ||
      user.blocked === true ||
      (user.role !== "user" && user.role !== "author")
    ) {
      return res.status(404).json({ error: "Não encontramos o usuário" });
    }
    if (user.posts <= 0) {
      return res.status(409).json({ error: "Já tem 5 posts criados" });
    }

    const post = await postModel.findOne({
      title,
      details,
    });

    if (post) {
      return res.status(409).json({ error: "Post duplicado" });
    }

    await postModel.create({
      userId,
      author,
      title,
      details,
      price: {
        min: price.min,
        max: price.max,
      },
      level,
      skills,
      category,
    });

    if (user.role === "user") {
      await userModel.findByIdAndUpdate(
        userId,
        { $set: { role: "author", posts: 5 } },
        { new: true }
      );
    }
    await userModel.findByIdAndUpdate(userId, { $inc: { posts: -1 } });
    res.status(201).json({ msg: "Post criado com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Não foi possível criar o post", details: error.message });
  }
};

export const alterPost = [
  (req, res, next) => {
    const validadeInput = [
      body("postId")
        .notEmpty()
        .isString()
        .withMessage("É necessário ter o identificador do post"),
      body("title")
        .optional()
        .isString()
        .withMessage("O titulo deve ser do tipo String"),
      body("details")
        .optional()
        .isString()
        .withMessage("Os detalhes devem ser do tipo String"),
    ];
    validadeInput.forEach((validation) => validation.run(req));
    next();
  },
  async (req, res) => {
    // Checa se há erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { userId } = req.query;
    if (!userId) {
      return res
        .status(404)
        .json({ error: "Não foi possível identificar o usuário" });
    }
    const { postId, title, details } = req.body;
    if (!postId) {
      return res
        .status(404)
        .json({ error: "É necessário ter o identificador do post" });
    }

    try {
      const user = await userModel.findById(userId);
      if (!user) {
        return res
          .status(404)
          .json({ error: "Não foi possíve localizar o usuário" });
      }

      const post = await postModel.findById(postId);
      if (!post) {
        return res.status(404).json({ error: "Esse post não foi localizado" });
      }
      const authorPost = await postModel.findOne({
        _id: postId,
        userId: userId,
      });

      if (!authorPost) {
        return res
          .status(409)
          .json({ error: "Você não tem permissão para alterar o post" });
      }

      const updateFields = {};

      if (title && title !== post.title) updateFields.title = title;
      if (details && details !== post.details) updateFields.details = details;
      if (Object.keys(updateFields).length > 0) {
        // Atualiza o post apenas se houver campos para atualizar
        await postModel.findByIdAndUpdate(postId, { $set: updateFields });
        res.status(200).json({ msg: "Atualização foi feita" });
      } else {
        res.status(200).json({ msg: "Não foi enviado nenhum alteração" });
      }
    } catch (error) {
      res.status(500).json({
        error: "Não foi possível receber as informações para alterar o post",
        details: error.message,
      });
    }
  },
];

export const deletePost = async (req, res) => {
  const { postId, userId } = req.body;

  if ((!postId, !userId)) {
    return res.status(404).json({ error: "Não foi possível prosseguir" });
  }

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(409)
        .json({ error: "Não foi possível localizar o usuário" });
    }

    const post = await postModel.findOne({ _id: postId, userId });

    if (!post) {
      return res.status(404).json({ error: "Não foi possível prosseguir" });
    }

    //await userModel.findOne({proposalId.})

    await postModel.findByIdAndDelete(postId);

    res.status(200).json({ msg: "Post deleted" });
  } catch (error) {
    res.status(500).json({
      error:
        "Não foi possível receber os dados necessários para deletar o post",
      details: error.message,
    });
  }
};
