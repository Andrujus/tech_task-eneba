import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || "postgres",
  ssl:
    process.env.PGSSLMODE === "require"
      ? { require: true, rejectUnauthorized: false }
      : false,
});

export default pool;
