import React, { useContext } from "react";
import { AppContext } from "../context";
import { Types } from "../context/reducers";

type Props = {
  transaction: Transaction;
};

export const Transaction: React.FC<Props> = ({ transaction }) => {
  const { dispatch } = useContext(AppContext);

  const sign = transaction.type === "exp" ? "-" : "+";

  return (
    <li className={transaction.type === "exp" ? "minus" : "plus"}>
      {transaction.name} {transaction.description}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() =>
          dispatch({
            type: Types.Delete,
            payload: {
              id: transaction.id,
            },
          })
        }
      >
        x
      </button>
    </li>
  );
};
