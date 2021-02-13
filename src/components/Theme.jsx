import React, { useState } from 'react';
import './Theme.css';

export default function Theme() {

    const [theme, setTheme] = useState(true)

    const mode = theme ? 'light' : 'dark';

    return (
        // <div className='container'>
        <div>
            <label>
                <input type="checkbox" />
                <span className="check" id={mode} onClick={() => setTheme(!theme)}></span>
                <div className={mode}>
                    <h1>Hello!</h1>
                    <h4>I'm Francisco, I like coding :)</h4>
                </div>
            </label>

        </div>
    )
}

