import express from "express"

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("listening on localhost:3000");
});

app.get("/", (req, res) =>{
    res.send("<h1>Hello world!</h1>");
}); 