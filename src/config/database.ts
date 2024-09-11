import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://natan4na_user:ZhuX5N4Ul9TnKsKFBnC3L5Vy8rMeR6HF@dpg-cr7qsvl6l47c73bq7ag0-a.oregon-postgres.render.com/natan4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;