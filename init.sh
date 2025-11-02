#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    ALTER USER admin WITH PASSWORD 'admin';
    \c mydb
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL