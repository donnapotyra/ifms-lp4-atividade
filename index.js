const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/veiculos", (req, res) => {
    res.send("Listar veículos");
});

app.get("/cadastrar", (req, res) => {
    res.send("Cadastrar veículos");
});

const port = 8080;
app.listen(port, console.log(`Servidor rodando ${port}`));