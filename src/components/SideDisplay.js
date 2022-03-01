/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
//This component is shows the current day and time and the button to show or hide the add-record-form
import React from "react"
import './../scss/SideDisplay.scss'

const SideDisplay = (props) => {
    const { setShowForm } = props
    return(
        <div id="side-display">
            <h1>It's your Money<br /> Own it.</h1>
            <p>Manage all your expenses in one place with Expensify.</p>
            <button onClick={() => setShowForm(true)}>add record</button>
        </div>
    )
}

export default SideDisplay