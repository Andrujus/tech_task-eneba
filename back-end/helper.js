import sha256 from "sha256"
import pool from "./db.js"
import { json } from "express";
import fs from "fs"

function passwordHash(password){
    const hashed_pass = sha256(password);
    return hashed_pass;
};

const getUsers = async () => {
  const result = await pool.query('SELECT * FROM "User"');
  return result.rows;
};

const getGames = async () =>{
  const result = await pool.query('SELECT * FROM "Game"');
  return result.rows;
};

// Fetch from database to backend
const UsersToJson = async () => {
  try {
    const users = await getUsers();
    fs.writeFile('./data_json/users.json', JSON.stringify(users, null, 2), "utf8", (err) =>{
    if (err) console.log("writefile error");
    else console.log("done");
});

  } catch (err) {
    console.error(err);
  }
}

// Fetch from database to backend
const GamesToJson = async () =>{
  try {
    const games = await getGames();
    fs.writeFile('./data_json/games.json', JSON.stringify(games, null, 2), "utf8", (err) =>{
    if (err) console.log("writefile error");
    else console.log("done");
  });
  } catch (err) {
    console.error(err);
  }
};

export default GamesToJson;