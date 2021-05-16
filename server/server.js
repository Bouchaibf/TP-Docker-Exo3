const express = require("express");
const path = require("path");
const server = express();

server.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

server.listen(8080, ()=>{
    console.log("Exercice N°3: Serveur run on 8080");
})
