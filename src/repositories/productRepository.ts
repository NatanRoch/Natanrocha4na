import { Pool } from 'pg';
import pool from '../config/database';
import { Product } from '../models/productModel';



export class ProductRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todos os usuários
  async getAllProduct(): Promise<Product[]> {
    const { rows } = await this.pool.query('SELECT  FROM users');
    return rows;
  }

  // Método para adicionar um novo usuário
  async addProduct(produto: string, preco: string): Promise<Product> {
    const queryText = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
    const { rows } = await this.pool.query(queryText, [produto, preco]);
    return rows[0];
  }
}