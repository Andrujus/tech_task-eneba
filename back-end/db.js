import pkg from "pg"
const { Pool } = pkg;
import "dotenv/config";


const pool = new Pool({
    user: "postgres.dhnfukswupijdrbzpqpi",
    password: process.env.SUPABASE_DB_PASSWORD,
    host: "aws-1-eu-north-1.pooler.supabase.com",
    port: 5432,
    database: "postgres",
    ssl: {
        require: true,
        rejectUnauthorized: false,
    },
});

export default pool