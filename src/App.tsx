import React, { useEffect } from "react";
import "./App.css";

import { AppProvider } from "./context";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { sendPushNotification } from "./PushNotification";

function App() {
  useEffect(() => {
    setTimeout(() => {
      sendPushNotification("Welcome User !!");
    }, 3000);
  }, []);
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <div className="transactions">
          <div className="transactions-sub">
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
