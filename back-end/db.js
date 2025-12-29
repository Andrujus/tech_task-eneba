import pkg from "pg"
const { Pool } = pkg;

const pool = new Pool({
    user: "andrujus",
    password: "",
    host: "localhost",
    port: 5432,
    database: "enebatechtask"
});

export default pool