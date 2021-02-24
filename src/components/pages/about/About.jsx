import React from 'react';
import './AboutStyles.css';

function About(props) {

    const fondo = props.theme ? 'day' : 'night';

    const cont = fondo + ' container';

    return (
        <div className={cont}>
            <p>
                I'm a Full Stack Developer, passionate for learning
            </p>
        </div>
    )
}

export default About;