import React, { useContext } from "react";
import { AppContext } from "../context";

export const IncomeExpenses: React.FC = () => {
  const {
    state: { transactions },
  } = useContext(AppContext);

  const income = transactions
    .filter((transactions:any) => transactions.type === "inc")
    .reduce((acc:any, item:any) => (acc += item.amount), 0)
    .toFixed(2);
  const expense = transactions
    .filter((transactions:any) => transactions.type === "exp")
    .reduce((acc:any, item:any) => (acc += item.amount), 0)
    .toFixed(2);

  return (
    <div className="main-container">
      <div className="inc-container">
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div className="exp-container">
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};
