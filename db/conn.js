const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expensesrecording", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

try{
    sequelize.authenticate();
    console.log("Conectato ao MySQL");
} catch(error){
    console.log(`Erro na conexão com o banco de dados: ${error}`);
}

module.exports = sequelize;