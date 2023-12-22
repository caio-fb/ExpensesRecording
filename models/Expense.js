const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Expense = db.define("Expense", {
    year: {
        type: DataTypes.STRING,
        required: true
    },
    mounth: {
        type: DataTypes.INTEGER,
        required: true
    },
    day: {
        type: DataTypes.INTEGER,
        required: true
    },
    type: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    value: {
        type: DataTypes.STRING,
        required: true
    }

});

module.exports = Expense;