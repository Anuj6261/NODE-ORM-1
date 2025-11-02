const { Client } = require('pg');
require('dotenv').config();

// Use the single source-of-truth DATABASE_URL from .env (if present). Falls back to localhost:5433.
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5433/mydb';

const client = new Client({
  connectionString,
});

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected successfully');
    const result = await client.query('SELECT current_user, current_database()');
    console.log('Current user:', result.rows[0]);
  } catch (err) {
    console.error('Connection error:', err.message);
  } finally {
    await client.end();
  }
}

testConnection();