import { Request, Response } from "express";
import { ProductRepository } from "../repositories/productRepository";

const productRepository = new ProductRepository();

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await productRepository.getAllProduct();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { produto, preco } = req.body;
  try {
    const product = await productRepository.addProduct(produto, preco);
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao adicionar usuário" });
  }
};
