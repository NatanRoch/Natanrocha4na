import pool from "../config/database";

const createProductTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS product (
        id SERIAL PRIMARY KEY,
        produto VARCHAR(100) NOT NULL,
        preco INTEGER(100) UNIQUE NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};
createProductTable().then(() => process.exit(0));
