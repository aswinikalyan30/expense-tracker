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

//importing hooks
import { useState } from "react";

//importing json file consisting of the income or expense categories
const categoriesData = require("./categories.json");

function App() {
  //state variables
  const [balance, setBalance] = useState(12000);
  const [showForm, setShowForm] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [theme, setTheme] = useState("light");
  const currency = String.fromCharCode(8377);

  const addRecord = (data) => {
    if (data.recordType === "income") {
      setBalance(balance + data.amount);
      setIncomes([data, ...incomes]);
    } else {
      setBalance(balance - data.amount);
      setExpenses([data, ...expenses]);
    }
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
      <Routes>
        <Route path="settings" element={<UserSettings theme={theme} />} />
        <Route
          path="/"
          element={
            <Dashboard
              balance={balance}
              currency={currency}
              expenses={expenses}
              incomes={incomes}
              theme={theme}
            />
          }
        />
      </Routes>
      {/* <Navigation
        theme={theme}
        handleThemeChange={handleThemeChange}
        showForm={showForm}
        setShowForm={setShowForm}
      /> */}
      {showForm ? (
        <Form 
          showForm={showForm} 
          setShowForm={setShowForm}
          addRecord={addRecord} />
      ) : (
        <Navigation
          theme={theme}
          handleThemeChange={handleThemeChange}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}

export default App;
