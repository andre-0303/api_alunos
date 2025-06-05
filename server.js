import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
const PORT = 3000;

app.post("/alunos", async (req, res) => {
  const { nome, idade, email, turma, ano } = req.body;

  try {
    const novoAluno = await prisma.aluno.create({
      data: { nome, idade, email, turma, ano },
    });
    res.status(201).json(novoAluno);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar aluno", detalhe: err });
  }
});

app.get("/alunos", async (req, res) => {
  const alunos = await prisma.aluno.findMany();
  res.json(alunos);
});

app.put("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, idade, email, turma, ano } = req.body;

  try {
    const alunoAtualizado = await prisma.aluno.update({
      where: { id },
      data: { nome, idade, email, turma, ano },
    });
    res.json(alunoAtualizado);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao atualizar aluno", detalhe: err });
  }
});

app.delete("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aluno.delete({ where: { id } });
    res.json({ mensagem: "Aluno removido com sucesso." });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao deletar aluno", detalhe: err });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/alunos`);
});
