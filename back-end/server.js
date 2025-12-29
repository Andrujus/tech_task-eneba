import express from "express"
import cors from "cors"
import pool from "./db.js"

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// create a new Game Card
app.post("/Games", async(req, res) =>{
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, ()=>{
    console.log("listening on localhost:5000");
});
