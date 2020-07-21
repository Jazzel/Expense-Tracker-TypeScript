type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Delete = "DELETE_TRANSACTION",
  Add = "ADD_TRANSACTION",
}

type TransactionPayload = {
  [Types.Add]: {
    id: number;
    name: string;
    amount: number;
    description: string;
    type: TransactionType;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type TransactionActions = ActionMap<TransactionPayload>[keyof ActionMap<
  TransactionPayload
>];

export const expenseReducer = (
  state: Transaction[],
  action: TransactionActions
) => {
  switch (action.type) {
    case Types.Delete:
      return [
        ...state.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      ];
    case Types.Add:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          amount: action.payload.amount,
          description: action.payload.description,
          type: action.payload.type,
        },
      ];
    default:
      return state;
  }
};
