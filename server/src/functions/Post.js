import userModel from "../models/userModel.js";
import postModel from "../models/postModel.js";

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
