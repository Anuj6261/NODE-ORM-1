const { drizzle } = require('drizzle-orm/node-postgres');
require('dotenv').config();

// Use DATABASE_URL so there's a single source of truth for host/port/user/password
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/mydb';

const db = drizzle(connectionString);

module.exports = db;