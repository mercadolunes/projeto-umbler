const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//View engine
app.set('view engine', 'ejs');


// arquivos staticos
app.use(express.static('public'));


// configurar o body-parser
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());


// conectando o database
connection // esse objeto é o msm nome que foi exportado do arquivo database/ database.js , na parte "module.exports = connection;"

    .authenticate()
    .then(() => {
        console.log("Conexao feita com sucesso");
    }).catch((error) => {
        console.log(error);
    })



app.use
//Rotas
app.get("/", (req, res) => {
    res.render('index');
});





app.listen(3000, () => {
    console.log("servidor está rodando!");
})