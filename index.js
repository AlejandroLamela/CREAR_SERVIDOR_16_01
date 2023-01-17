const express = require("express");
const server = express();

const PORT = 3000;
server.listen(PORT, (req, res)=>{
    console.log(`running server  in http://localhost:${PORT}/`)
});