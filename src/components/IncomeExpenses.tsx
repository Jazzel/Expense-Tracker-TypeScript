import React, { useContext } from "react";
import { AppContext } from "../context";

export const IncomeExpenses: React.FC = () => {
  const {
    state: { transactions },
  } = useContext(AppContext);

  const transaction = transactions.map((transaction) => transaction);
  const income = transactions
    .filter((transactions) => transactions.type === "inc")
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  const expense = transaction
    .filter((transactions) => transactions.type === "exp")
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};
