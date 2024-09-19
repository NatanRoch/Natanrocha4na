import pool from "../config/database";

const createTransTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS actions (
        id SERIAL PRIMARY KEY,
        id_user INTEGER NOT NULL,
        id_product INTEGER UNIQUE NOT NULL,
        FOREING KEY (id_user) REFERENCES users(id),
        FOREING KEY (id_product) REFERECES products(id)
      )
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
createTransTable().then(() => process.exit(0));