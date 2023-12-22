const Expense = require("../models/Expense");

module.exports = class ExpenseController{
    static pageOfCreateExpense(req, res){
        res.render("expenses/create");
    }

    static async createExpense (req, res){
        const expense = {
            year: req.body.year,
            mounth: req.body.mounth,
            day: req.body.day,
            type: req.body.type,
            description: req.body.description,
            value: req.body.value
        }

        await Expense.create(expense);

        res.redirect("/expenses/create");
    }
}