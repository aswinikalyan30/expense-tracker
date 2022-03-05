/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./../scss/Basic.scss";

const Basic = (props) => {
  const { balance, currency } = props;
  return (
    <section id="main">
      <h3>
        Hello <span id="user-name">Basically</span>
      </h3>
      <section id="basic-info">
        <span id="balance-text">Here's your remaining balance</span>
        <span id="balance-amount">
          {balance}
          <span id="currency">INR</span>
        </span>
        <p id="extra-text">
          You've spent {currency}520 this week.
          That's 30% more since last week.
        </p>
      </section>
    </section>
  );
};

export default Basic;
