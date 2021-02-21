import React from 'react';
import './Theme.css';

export default function Theme(props) {

    // const mode = props.theme ? 'dark' : 'light';
    const mode = props.theme ? 'light' : 'dark';


    return (
        <div>
            <label>
                <input type="checkbox" />
                <span className="check" id={mode} onClick={() => props.setTheme(!props.theme)}></span>
            </label>

            <div className={mode}>
                <h1>Hello!</h1>
                <span>I'm Francisco, I like coding :)</span>
            </div>
        </div>
    )
}

