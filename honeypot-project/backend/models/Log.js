const { pool } = require('../config/db');

const createLog = async (log) => {
  const { ip, type, payload } = log;
  const query = `
    INSERT INTO logs (ip, type, payload, timestamp)
    VALUES ($1, $2, $3, NOW())
    RETURNING *;
  `;
  const values = [ip, type, payload];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getLogs = async () => {
  const query = 'SELECT * FROM logs;';
  const result = await pool.query(query);
  return result.rows;
};

module.exports = {
  createLog,
  getLogs,
};