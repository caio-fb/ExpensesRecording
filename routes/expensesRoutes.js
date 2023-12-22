const express = require("express");
const router = express.Router();
const ExpenseController = require("../controllers/expensesController");

router.get("/create", ExpenseController.pageOfCreateExpense);
router.post("/create", ExpenseController.createExpense);

module.exports = router;