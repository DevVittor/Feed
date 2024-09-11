import postModel from "../models/postModel.js";
import proposalModel from "../models/proposalModel.js";
import userModel from "../models/userModel.js";

export const createProposal = async (req, res) => {
  const { postId, userId } = req.query;

  console.log(`Query: ${req}`);

  if (!postId || !userId) {
    return res
      .status(404)
      .json({ error: "É necessário identificar o post e o usuário" });
  }

  const { proposal, price, term, contact } = req.body;

  if (!proposal || !price || !term || !contact) {
    return res.status(404).json({ error: "Preencha todos os campos" });
  }

  try {
    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(409).json({ error: "Esse post não existe" });
    }

    const user = await userModel.findById(userId);
    if (
      !user ||
      (user.role !== "user" && user.role !== "freela" && user.proposal <= 0)
    ) {
      return res
        .status(409)
        .json({ error: "Você não pode fazer uma proposta" });
    }

    // Verificar se o usuário já fez uma proposta para o post
    const proposalRegistered = post.proposalId.some((proposalId) =>
      proposalId.equals(userId)
    );

    if (proposalRegistered) {
      return res
        .status(409)
        .json({ error: "Você já fez uma proposta para este post" });
    }

    if (!user.proposal) {
      await userModel.findById(userId, { $set: { proposal: 10 } });
    }

    if (user.proposal <= 0) {
      return res
        .status(404)
        .json({ error: "Você já bateu o seu limite de propostas" });
    }

    const createProposal = await proposalModel.create({
      userId,
      proposal,
      price,
      term,
      contact,
    });

    await postModel.findByIdAndUpdate(
      postId,
      {
        $push: { proposalId: userId },
      },
      { new: true }
    );

    if (user.role === "user") {
      await userModel.findByIdAndUpdate(
        userId,
        { $set: { role: "freela" } },
        { new: true }
      );
    }

    await userModel.findByIdAndUpdate(
      userId,
      {
        $push: { proposalId: createProposal._id },
      },
      { $inc: { proposal: -1 } },
      { new: true }
    );

    res.status(201).json({ msg: "Proposta Criada" });
  } catch (error) {
    res.status(500).json({
      error:
        "Não foi possível receber os dados necessários para fazer uma proposta para o post",
      details: error.message,
    });
  }
};
