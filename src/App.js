/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
//importing the different components and App.scss stylesheet

import "./App.scss";
import Form from "./components/Form";
import SideDisplay from "./components/SideDisplay";

//importing libraries here
import { useState } from "react";

//importing json file consisting of the income or expense categories
const categoriesData = require("./categories.json");

function App() {
  //state variables
  const [balance, setBalance] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const [records, setRecords] = useState([]);
  const [recentIncomes, setRecentIncomes] = useState([])
  const [recentExpenses, setRecentExpenses] = useState([])

  const addRecord = (data) => {
    setRecords(() => {
      records.push(data);
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
        <Reports recentIncomes={recentIncomes} recentExpenses={recentExpenses} />
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

const Reports = (props) => {
  const { recentIncomes, recentExpenses } = props;
  /*  const { records } = props
  let index = 0;
  const incomeList = []
  const expenseList = []
  
  while(index < records.length && index < 5) {
    const element = records[index]
    
    if(element.recordType === 'income') {
      incomeList.push(
        <li>
          <div className="record-info income">
            <h3>{element.category}</h3>
            <span>19.02.2022</span>
          </div>
          <span className="record-amount">{element.amount}</span>
        </li>
      )
    } else {
      expenseList.push(
        <li>
          <div className="record-info expense">
            <h3>{element.category}</h3>
            <span>19.02.2022</span>
          </div>
          <span className="record-amount">{element.amount}</span>
        </li>
      )
    }
    index = index + 1;
  } */
  return (
    <div>
      <h1>Reports</h1>
      <div id="recent-incomes">
        <h3>Most recent incomes</h3>
        <ul>{recentIncomes}</ul>
      </div>
      <div id="recent-expenses">
        <h3>Most recent expenses</h3>
        <ul>{recentExpenses}</ul>
      </div>
    </div>
  );
};

export default App;
