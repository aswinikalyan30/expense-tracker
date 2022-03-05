/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./../scss/Overview.scss";

const Overview = (props) => {
  const { currency } = props;

  return (
    <section id="overview">
      <h3>Recent expenses</h3>
      <div id="expenses-list">
        <ul>
          <li>
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
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Overview;