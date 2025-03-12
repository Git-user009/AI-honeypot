const { pool } = require('../config/db');

// Fetch all logs
const getLogs = async (req, res) => {
  try {
    const query = 'SELECT * FROM logs;';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching logs', error: err });
  }
};

// Delete a log
const deleteLog = async (req, res) => {
  const { logId } = req.params;
  try {
    const query = 'DELETE FROM logs WHERE id = $1 RETURNING *;';
    const values = [logId];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Log not found' });
    }

    res.json({ message: 'Log deleted successfully', log: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting log', error: err });
  }
};

module.exports = {
  getLogs,
  deleteLog,
};