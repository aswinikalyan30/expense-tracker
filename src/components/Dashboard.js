/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Basic from './Basic';
import Overview from './Overview'
import './../scss/Dashboard.scss';

const Dashboard = (props) => {
    const {
        balance,
        currency,
        expenses,
        incomes,
        theme
    } = props;
    return(
        <main className={`${theme}`}>
            <Basic balance={balance} currency={currency} />
            <Overview currency={currency} expenses={expenses} incomes={incomes} />
        </main>
    )
}

export default Dashboard;