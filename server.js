const express = require("express");
const cors = require("cors");

//Iniciando o app
const app = express();

//Permite receber dados json
app.use(express.json())

//Permite acessos de aplicações externas
app.use(cors());

//Rotas
app.use("/api", require("./src/routes"));

//Listener
app.listen("3001");