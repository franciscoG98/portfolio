import React, { useState } from 'react';
import './Theme.css';

export default function Theme() {

    const [theme, setTheme] = useState(true)

    const mode = theme ? 'light' : 'dark';

    return (
        <div>
            <label>
                <input type="checkbox" />
                <span className="check" id={mode} onClick={() => setTheme(!theme)}></span>
            </label>

            {/* {console.log('theme:\n', theme, '\n mode \n', mode)} */}

            <div className={mode}>
                <h1>Hello!</h1>
                <span>I'm Francisco, I like coding :)</span>
            </div>
        </div>
    )
}

