import { Pool } from 'pg';
import pool from '../config/database';
import { Transaction } from '../models/transModel';



export class TransRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todos os usuários
  async getAllTransaction(): Promise<Transaction[]> {
    const { rows } = await this.pool.query('SELECT  FROM users');
    return rows;
  }

  // Método para adicionar um novo usuário
  async addTransaction(id_user: string, id_product: string): Promise<Transaction> {
    const queryText = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
    const { rows } = await this.pool.query(queryText, [id_user, id_product]);
    return rows[0];
  }
}