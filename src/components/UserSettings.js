/* eslint-disable react/prop-types */
import React from 'react';
import './../scss/UserSettings.scss';

const UserSettings = (props) => {
    const {theme} = props;
    return(
        <div className={`component ${theme}`}>
            <h1>Settings</h1>
        </div>
    )
}

export default UserSettings;