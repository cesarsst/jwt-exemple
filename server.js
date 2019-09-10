require("dotenv-safe").config();

const express = require('express');
const consign = require('consign');


app = express();
app.port = 3000;


consign()
    .include('./src/routes')
    .into(app);


app.listen(app.port,()=>{
    console.log(`Servidor online na porta ${app.port}`)
});

module.exports = app;