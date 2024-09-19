import { Request, Response } from "express";
import { TransRepository } from "../repositories/transRepository";

const transRepository = new TransRepository();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const actions = await transRepository.getAllTransaction();
    res.status(200).json(actions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { id_user, id_product } = req.body;
  try {
    const user = await transRepository.addTransaction (id_user, id_product);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao adicionar usuário" });
  }
};
