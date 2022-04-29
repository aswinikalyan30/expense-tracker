/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
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
            <h1>Dashboard</h1>
        </main>
    )
}

export default Dashboard;