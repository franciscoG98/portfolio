import React, { useState, useEffect } from 'react';
import "./navbar.css";

function Nabvar(props) {
    const [bla, setBla] = useState(0);

    useEffect(() => {   
        document.title = `You clicked ${bla} times`;  
    });

    const mode = props.theme ? 'light' : 'dark';
    

    return (
        <div className={mode}>
            <p>You clickcwsdcsdcsded times</p>


            <button onClick={() => setBla(bla + 1)} >
                Click me
            </button>
        </div>
    )
}

export default Nabvar

