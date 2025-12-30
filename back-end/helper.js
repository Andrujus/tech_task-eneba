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

const UsersToJson = async () => {
  try {
    const users = await getUsers();
    fs.writeFile('./data_json/users.json', JSON.stringify(users), "utf8", (err) =>{
    if (err) console.log("writefile error");
    else console.log("done");
});

  } catch (err) {
    console.error(err);
  }
}


UsersToJson();