/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import React from "react";
import { Routes, Route } from "react-router-dom";

//importing different stylesheets
import "./App.scss";

//importing different components
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import UserSettings from "./components/UserSettings";
import Transaction from "./components/Transaction";

//importing hooks
import { useState } from "react";

//importing json file consisting of the income or expense categories
const categoriesData = require("./categories.json");

function App() {
  //state variables
  const [balance, setBalance] = useState(12000);
  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [theme, setTheme] = useState("light");
  const currency = String.fromCharCode(8377);

  const addRecord = (data) => {
    if (data.recordType === "income") {
      setBalance(balance + data.amount);
    } else {
      setBalance(balance - data.amount);
    }
    setTransactions([data, ...transactions]);
    console.log(transactions);
  };
  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="container">
      <Navigation
        theme={theme}
        handleThemeChange={handleThemeChange}
        setShowForm={setShowForm}
      />
      {showForm && (
        <Form
          setShowForm={setShowForm}
          addRecord={addRecord}
          categoriesData={categoriesData}
        />
      )}
      <Routes>
        <Route path="settings" element={<UserSettings theme={theme} />} />
        <Route path="transaction" element={<Transaction theme={theme} />} />
        <Route
          path="/"
          element={
            <Dashboard
              balance={balance}
              currency={currency}
              theme={theme}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
