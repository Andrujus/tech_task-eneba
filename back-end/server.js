import express from "express"
import cors from "cors"
import pool from "./db.js"
import path from "path";
import { fileURLToPath } from "url";
import { WritableStreamDefaultWriter } from "stream/web";
import GamesToJson from "./helper.js"
import Fuse from "fuse.js";
import fs from "fs";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

async function start() {
  await GamesToJson();
}

start().catch((err) => {
  console.error("Startup failed:", err);
});

app.get("/", (req, res) =>{
    res.send("/api/list for games list")
});

// List games
app.get("/api/list", async(req, res) =>{
    try {
        const listGames = await pool.query(`
  SELECT gameid, userid, gametitle, gameregion, gameprice, platform, "ImageUrl", 'IsFavorite'
  FROM "Game";
`);
        res.json(listGames.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// List Users
app.get("/api/user_list", async(req, res) =>{
    try {
        const listUsers = await pool.query(`
  SELECT userid, username, email, imageurl
  FROM "User";
`);
        res.json(listUsers.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message});
    }
});

// List favortie games
app.get("/api/list/favorites", async (req, res) => {
    try {
        const listFavorites = await pool.query(`
    SELECT gameid, gametitle, gameprice, gameregion, "ImageUrl", IsFavorite FROM "Game" WHERE IsFavorite = true;         
`);
        res.json(listFavorites.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message});
    }
    
});

// Fuzzy search api
let fuse;
try {
    const gamesData = JSON.parse(fs.readFileSync('./data_json/games.json', 'utf8'));
    fuse = new Fuse(gamesData, {
        keys: ['gametitle', 'gameregion'],
        threshold: 0.4
    });
    console.log(gamesData.length);
} catch (err) {
    console.error('Failed. ', err);
}

app.get("/api/list/search/:query", async(req, res) => {
    try {
        const query = req.params.query;
        
        if (!fuse) {
            return res.status(500).json({ error: 'Search not initialized' });
        }
        
        if (!query) {
            return res.json([]);
        }
        
        const results = fuse.search(query);
        res.json(results.map(result => result.item));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

/*-------------------------------------------------*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/acc_images", express.static(path.join(__dirname, "public/acc_images")));

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
