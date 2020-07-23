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
      <span>
        <span style={{ fontWeight: "bolder", textTransform: "uppercase" }}>
          {transaction.name}
        </span>
        {transaction.description ? `:  ${transaction.description}` : null}
      </span>
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
