const express = require("express");
const router = express.Router();
const ExpenseController = require("../controllers/expensesController");

router.get("/create", ExpenseController.pageOfCreatingExpense);
router.post("/create", ExpenseController.createExpense);
router.get("/", ExpenseController.showExpenses);

module.exports = router;