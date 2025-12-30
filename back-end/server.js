import express from "express"
import cors from "cors"
import pool from "./db.js"
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("/list for games list")
});

// List games
app.get("/list", async(req, res) =>{
    try {
        const listGames = await pool.query(`
  SELECT gameid, gametitle, gameregion, gameprice, platform, "ImageUrl"
  FROM "Game";
`);


        res.json(listGames.rows);
    } catch (err) {
        console.error(err.message);
    }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(port, ()=>{
    console.log("listening on localhost:5000");
});

