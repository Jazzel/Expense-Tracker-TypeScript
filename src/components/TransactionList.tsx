import React, { useContext } from "react";
import { AppContext } from "../context";
import { Transaction } from "../components/Transaction";

export const TransactionList: React.FC = () => {
  const {
    state: { transactions },
  } = useContext(AppContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length > 0
          ? transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))
          : "No history found"}
      </ul>
    </>
  );
};
