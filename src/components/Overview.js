/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./../scss/Overview.scss";

const Overview = (props) => {
  const { currency, expenses, incomes } = props;
  // const [listItems, setListItems] = useState([]);

  return (
    <section id="overview">
      <h3>Recent expenses</h3>
      <div id="expenses-list">
        <ul>
        {expenses[0] !== undefined && (
            <li>
              <div className="category">
                <span className="category-title">{expenses[0].category}</span>
                <span className="category-date">{expenses[0].date}</span>
              </div>
              <div className="category-price">
                <span className="category-amount">{currency}{expenses[0].amount}</span>
              </div>
            </li>
        )}
        {expenses[1] !== undefined && (
            <li>
              <div className="category">
                <span className="category-title">{expenses[1].category}</span>
                <span className="category-date">{expenses[1].date}</span>
              </div>
              <div className="category-price">
                <span className="category-amount">{currency}{expenses[1].amount}</span>
              </div>
            </li>
        )}
        {expenses[2] !== undefined && (
            <li>
              <div className="category">
                <span className="category-title">{expenses[2].category}</span>
                <span className="category-date">{expenses[2].date}</span>
              </div>
              <div className="category-price">
                <span className="category-amount">{currency}{expenses[2].amount}</span>
              </div>
            </li>
        )}
        </ul>
      </div>
    </section>
  );
};

export default Overview;

{
  /* <li>
            <div className="category">
              <span className="category-title">Food</span>
              <span className="date">02.03.2022</span>
            </div>
            <div className="price">
              <span className="amount">{currency}400</span>
            </div>
          </li>
          <li>
            <div className="category">
              <span className="category-title">Clothing</span>
              <span className="date">02.03.2022</span>
            </div>
            <div className="price">
              <span className="amount">{currency}400</span>
            </div>
          </li>
          <li>
            <div className="category">
              <span className="category-title">Accessories</span>
              <span className="date">02.03.2022</span>
            </div>
            <div className="price">
              <span className="amount">{currency}400</span>
            </div>
          </li> */
}
