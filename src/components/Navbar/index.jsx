import React, { useState, useEffect } from 'react';
import "./navbar.css";

function Nabvar(props) {
    const [bla, setBla] = useState(0);

    useEffect(() => {   
        document.title = `You clicked ${bla} times`;  
    });

    const aber = props.theme ? 'light1' : 'dark1';
    

    return (
        <div className={aber}>


            <button  onClick={() => setBla(bla + 1)} >
                +
            </button>
            <p>You clicked {bla} times</p>
            <button  onClick={() => setBla(bla - 1)} >
                -
            </button>
        </div>
    )
}

export default Nabvar

