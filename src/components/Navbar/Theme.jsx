import React from 'react';
import './Theme.css';

export default function Theme(props) {

    // const mode = props.theme ? 'light' : 'dark';


    console.log('theme en theme:', props.theme);

    return (
        <div>
            <label>
                <input type="checkbox" />
                <span
                    className="check"
                    id={props.theme}
                    onClick={() => props.theme ==='light' ? props.setTheme('dark') : props.setTheme('light') }
                ></span>
            </label>
        </div>
    )
}

