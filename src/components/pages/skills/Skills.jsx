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
            <div className="tech-cont">
                <div className='tech-cont1'>
                    <h3>Front-end</h3>
                    <ul>
                        <li><DiJavascript1 size={50} className='icons' />Javascript (ES6)</li>
                        <li><DiReact size={50} className='icons' />React</li>
                        <li><SiRedux size={50} className='icons' />Redux</li>
                        <li><DiReact size={50} className='icons' />React-native</li>
                        <li><SiExpo size={50} className='icons' />Expo-cli</li>
                        <li><DiCss3 size={50} className='icons' />CSS3</li>
                        <li><DiBootstrap size={50} className='icons' />Bootstrap</li>
                        <li><SiMaterialUi size={50} className='icons' />Material UI</li>
                    </ul>
                </div>
                <div className='tech-cont2'>
                    <h3>Back-end</h3>
                    <ul>
                        <li><SiNodeDotJs size={50} className='icons' />Node</li>
                        <li>Express</li>
                        <li><DiSqllite size={50} className='icons' />SQLite</li>
                        <li><SiPostgresql size={50} className='icons' />PostgreSQL</li>
                        <li><SiGraphql size={50} className='icons' />GraphQL</li>
                        <li><SiMongodb size={50} className='icons' />MongoDB</li>
                    </ul>
                </div>
                <div className='tech-cont3'>
                    <h3>other-ends</h3>
                    <ul>
                        <li><DiGit size={50} className='icons' />Git</li>
                        <li><DiLinux size={50} className='icons' />Linux</li>
                        <li><DiScrum size={50} className='icons' />SCRUM Methodology</li>
                    </ul>
                </div>
            </div>
        </div>

        // </div>
    )
}

export default Skills;