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
  const [balance, setBalance] = useState(12000);
  const [showForm, setShowForm] = useState(true);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const currency = String.fromCharCode(8377)

  const addRecord = (data) => {
    if (data.recordType === "income") {
      setBalance(balance + data.amount);
    } else {
      setBalance(balance - data.amount);
    }
  };

  return (
    <div id="container">
      <main>
        <Basic balance={balance} currency={currency} />
        <Overview currency={currency} expenses={expenses} incomes={incomes} />
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
