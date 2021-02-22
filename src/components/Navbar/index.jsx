import React, { useState, useEffect } from 'react';
import "./navbar.css";

function Nabvar(props) {

    const fondo = props.theme ? 'day' : 'night';

    return (
        <div>
            <h3 className={fondo}>Navbar</h3>
        </div>

    )
}

export default Nabvar

