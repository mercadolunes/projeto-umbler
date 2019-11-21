const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'guiapress', 'timer100', {
    host: 'mysql669.umbler.com', // aqui vc colocar onde esta hospedado o banco de dados
    dialect: 'mysql' // tipo de banco de dados que o sequelize se conecta
});

module.exports = connection; // aqui vc exporta essa variavel para que possa usar em outros arquivos