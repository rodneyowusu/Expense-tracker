import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  /**Another Filtering Solution */
  const filteredExpenses = props.expensedata.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // console.log(props.expensedata[0].date.getYear()+1900)




  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onGetYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} /> 
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
