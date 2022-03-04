/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Basic = (props) => {
    const { balance } = props;
  return (
    <main>
      <h3>
        Hello <span id="user-name">Basically</span>
      </h3>
      <section id="basic-info">
          <span id="balance-text">Here's your remaining balance</span>
          <span id="balance-amount">{balance}</span>
          <span>You've spent $520 this week out of $725.18</span>
      </section>
    </main>
  );
};

export default Basic;
