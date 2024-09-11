import userModel from "../models/userModel.js";
import postModel from "../models/postModel.js";
export const createPost = async (req, res) => {
  const { userId } = req.query;
  console.log("Query: ", req.query);
  if (!userId) {
    return res.status(404).json({ error: "Não tem userId" });
  }
  const { title, details, price, level, skills, category } = req.body;
  console.log("Body: ", req.body);
  if (
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
    console.log("Posts: ", user.posts);
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

    const author = user.username;

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

    await userModel.findByIdAndUpdate(userId, { $inc: { posts: -1 } });

    if (user.role === "user") {
      await userModel.findByIdAndUpdate(
        userId,
        { $set: { role: "author" } },
        { new: true }
      );
    }

    res.status(201).json({ msg: "Post criado com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Não foi possível criar o post", details: error.message });
  }
};
