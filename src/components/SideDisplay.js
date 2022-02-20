/* eslint-disable react/prop-types */
//This component is shows the current day and time and the button to show or hide the add-record-form
import React from "react"

const SideDisplay = (props) => {
    const { setShowForm } = props
    return(
        <div>
            <h1>Good morning</h1>
            <button onClick={() => setShowForm(true)}>add record</button>
        </div>
    )
}

export default SideDisplay