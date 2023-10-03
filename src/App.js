import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "448.00",
    date: new Date(2022, 3, 28),
  },
  {
    id: "e2",
    title: "Toilet",
    amount: "220.00",
    date: new Date(2020, 5, 9),
  },
  {
    id: "e3",
    title: "Home Insurance",
    amount: "370.00",
    date: new Date(2019, 2, 26),
  },
  {
    id: "e4",
    title: "Electricity",
    amount: "147.00",
    date: new Date(2022, 8, 28),
  },
];

const App = () => {
  const [expenses, setExpences]=useState(DUMMY_EXPENSES)
  

  const addExpenseHandler = (expense) => {
    setExpences(prevExpenses => [expense,...prevExpenses])
  }
 

  return (
     
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensedata={expenses} />
    </div>
  );
};

export default App;
