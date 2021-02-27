import React from 'react';
import './skillsStyles.css'

function Skills(props) {

    let fondo = props.theme ? 'dei' : 'nait';
    let skills = fondo + ' mainCont';
    
    return (
        <div className={skills}>
            <h1>Skills</h1>

            <div className='tech-cont'>
                <h3>Front-end</h3>
                <ul>
                    <li>Javascript ES6</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React-native</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                    <li>Expo-cli</li>
                </ul>
            </div>
            <div className='tech-cont'>
                <h3>Back-end</h3>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>GraphQL</li>
                    <li>SQLite</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className='tech-cont'>
                <h3>other-ends</h3>
                <ul>
                    <li>Git(github)</li>
                    <li>Linux Systems</li>
                    <li>SCRUM Methodology</li>
                </ul>
            </div>

        </div>
    )
}

export default Skills;