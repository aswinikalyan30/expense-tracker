/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
//importing the different components and App.scss stylesheet

import "./App.scss";
import Form from "./components/Form";
import SideDisplay from "./components/SideDisplay";

//importing libraries here
import { useState, useEffect } from "react";

//importing json file consisting of the income or expense categories
const categoriesData = require("./categories.json");

function App() {
  //state variables
  const [balance, setBalance] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const [records, setRecords] = useState([]);

  const addRecord = (data) => {
    setRecords(() => {
      records.unshift(data);
      return records;
    });
    if (data.recordType === "income") {
      setBalance(balance + data.amount);
    } else {
      setBalance(balance - data.amount);
    }
  };

  return (
    <div id="container">
      <main>
        <h3>Available Balance</h3>
        <span>{balance}</span>
        {records.length === 0 ? (
          <p>no recent records</p>
        ) : (
          <Recents records={records} />
        )}
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

const Recents = (props) => {
  const { records } = props;
  const recentIncomes = [];
  const recentExpenses = [];

  for (let i = 0; i < 3 && i < records.length; i++) {
    if (records[i].recordType === "income") {
      recentIncomes.unshift(records[i]);
    } else {
      recentExpenses.unshift(records[i]);
    }
  }

  return (
    <div>
      <div id="recent-incomes">
        <p>Recent Incomes</p>
        <ul>
          {recentIncomes.map((record) => (
            <li key={record.date}>
              <span>{record.category}</span>
              <span>{record.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div id="recent-expenses">
        <p>Recent Expenses</p>
        <ul>
          {recentExpenses.map((record) => (
            <li key={record.date}>
              <span>{record.category}</span>
              <span>{record.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
