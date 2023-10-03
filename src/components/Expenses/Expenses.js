import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear)
    setFilteredYear(selectedYear);
  };

  // console.log(filteredYear)

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter
          selected={filteredYear}
          onGetYear={filterChangeHandler}
        />
        {props.expensedata.map(expense => 
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
          )}
      </Card>
    </div>
  );
};

export default Expenses;
