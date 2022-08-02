import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseItems() {
  const expenseData = [
    {
      title: "Bus Fare",
      amount: "70",
      date: new Date(2022, 0, 25),
    },
  ];

  return (
    <div>
      <div>Header</div>
      <div>
        <ExpenseItem
          title={expenseData[0].title}
          amount={expenseData[0].amount}
          date={expenseData[0].date}
        />
      </div>
      <div>
        {expenseData.forEach((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseItems;
