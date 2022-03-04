/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";

//importing the different components and App.scss stylesheet
import "./App.scss";
import Form from "./components/Form";
import SideDisplay from "./components/SideDisplay";
import Basic from "./components/Basic";
import Overview from "./components/Overview";

//importing libraries here
import { useState, useRef } from "react";

//importing json file consisting of the income or expense categories
const categoriesData = require("./categories.json");

function App() {
  //state variables
  const [balance, setBalance] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addRecord = (data) => {
    if (data.recordType === "income") {
      setBalance(balance + data.amount);
      setIncomes(() => {
        incomes.unshift(data);
        return incomes;
      });
    } else {
      setBalance(balance - data.amount);
      setExpenses(() => {
        expenses.unshift(data);
        return expenses;
      });
    }
  };

  return (
    <div id="container">
      <main>
        <Basic balance={balance} />
        <Overview />
      </main>
      <div id="side-panel">
        {showForm ? (
          <Form
            setShowForm={setShowForm}
            categoriesData={categoriesData}
            addRecord={addRecord}
          />
        ) : (
          <SideDisplay setShowForm={setShowForm} />
        )}
      </div>
    </div>
  );
}

export default App;
