import React from 'react';
import './skillsStyles.css'
import {
    DiJavascript1,
    DiLinux,
    DiReact,
    DiCss3,
    DiSqllite, 
    DiGit,
    DiScrum, 
    DiBootstrap
} from "react-icons/di";
import {
    SiExpo,
    SiMaterialUi,
    SiRedux,
    SiGraphql,
    SiMongodb,
    SiNodeDotJs,
    SiPostgresql
} from "react-icons/si";


function Skills(props) {

    console.log('theme en skills', props.theme);


    // let fondo = props.theme ? 'dei' : 'nait';
    // let skills = fondo + ' mainCont';
    
    return (
        // <div className={skills}>

        <div className="skillsCont">
            <h1>Skills</h1>

            <div className="tech-cont">
                <div className='tech-cont1'>
                    <h3>Front-end</h3>
                    <ul>
                        <li><DiJavascript1 size={40} />Javascript ES6</li>
                        <li><DiReact size={40} />React</li>
                        <li><DiReact size={40} />React-native</li>
                        <li><DiCss3 size={40} />CSS3</li>
                        <li><DiBootstrap size={40} />Bootstrap</li>
                        <li><SiMaterialUi size={40} />Material UI</li>
                        <li><SiRedux size={40} />Redux</li>
                        <li><SiExpo size={40} />Expo-cli</li>
                    </ul>
                </div>
                <div className='tech-cont2'>
                    <h3>Back-end</h3>
                    <ul>
                        <li><SiNodeDotJs size={40} />Node</li>
                        <li>Express</li>
                        <li><DiSqllite size={40} />SQLite</li>
                        <li><SiPostgresql size={40} />PostgreSQL</li>
                        <li><SiGraphql size={40} />GraphQL</li>
                        <li><SiMongodb size={40} />MongoDB</li>
                    </ul>
                </div>
                <div className='tech-cont3'>
                    <h3>other-ends</h3>
                    <ul>
                        <li><DiGit size={40} />Git</li>
                        <li><DiLinux size={40} />Linux</li>
                        <li><DiScrum size={40} />SCRUM Methodology</li>
                    </ul>
                </div>
            </div>
        </div>

        // </div>
    )
}

export default Skills;