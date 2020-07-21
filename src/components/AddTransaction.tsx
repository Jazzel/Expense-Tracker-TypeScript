import React, { useState, useContext } from "react";
import { AppContext } from "../context";
import { Types } from "../context/reducers";

enum TransactionType {
  Expense = "exp",
  Income = "inc",
}

export const AddTransaction: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [transType, setTransType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    dispatch({
      type: Types.Add,
      payload: {
        id: Math.floor(Math.random() * 100000000),
        name,
        description,
        amount: +amount,
        type: transType || "exp",
      },
    });
    setName("");
    setDescription("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <select
            value={transType}
            onChange={(e) => setTransType(e.target.value)}
          >
            <option value={TransactionType.Expense}>
              {TransactionType.Expense}
            </option>
            <option value={TransactionType.Income}>
              {TransactionType.Income}
            </option>
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
