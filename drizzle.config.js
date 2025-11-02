require('dotenv').config();
const { defineConfig } = require('drizzle-kit');

const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5433/mydb';

module.exports = defineConfig({
  dialect: 'postgresql',
  out: './drizzle',
  schema: './drizzle/schema.js',
  dbCredentials: {
    url: dbUrl,
  },
});
