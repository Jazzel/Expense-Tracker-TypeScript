import React, { useContext } from "react";
import { AppContext } from "../context";

export const Balance: React.FC = () => {
  const {
    state: { transactions },
  } = useContext(AppContext);

  const income = transactions
    .filter((transactions) => transactions.type === "inc")
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  const expense = transactions
    .filter((transactions) => transactions.type === "exp")
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  const total = Math.abs(parseFloat(income) - parseFloat(expense));
  const sign =
    parseFloat(income) === 0 && parseFloat(expense) === 0
      ? "+"
      : parseFloat(income) === 0
      ? "-"
      : total < 0
      ? "-"
      : "+";

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Current Balance: &nbsp;
        {sign}${total}.00
      </h2>
    </div>
  );
};
