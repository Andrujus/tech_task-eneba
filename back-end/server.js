import express from "express"
import cors from "cors"
import pool from "./db.js"

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
        const listGames = await pool.query(`SELECT gameid, gametitle, gameregion, gameprice, platform
FROM "Game";`);

        res.json(listGames.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, ()=>{
    console.log("listening on localhost:5000");
});

