import React, { createContext, useReducer } from "react";
import { expenseReducer } from "./reducers";


// Initial state
type InitialStateType = {
  transactions: Transaction[];
};

const initialState = {
  transactions: [],
};

// Create Context
const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = ({ transactions }:any, action: any) => ({
  transactions: expenseReducer(transactions, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
