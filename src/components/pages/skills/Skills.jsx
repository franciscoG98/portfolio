import React from 'react';
import './skillsStyles.css'
import {
    DiJavascript1,
    DiLinux,
    DiReact,
    DiCss3,
    DiHtml5,
    DiSqllite, 
    DiGit,
    DiScrum, 
    DiBootstrap
} from "react-icons/di";
import {
    // SiExpo,
    SiMaterialUi,
    SiRedux,
    // SiGraphql,
    SiMongodb,
    SiNodeDotJs,
    SiPostgresql
} from "react-icons/si";


function Skills(props) {

    console.log('theme en skills', props.theme);


    // let fondo = props.theme ? 'dei' : 'nait';
    // let skills = fondo + ' mainCont';
    
    return (

        <div className="skillsCont">
            <h3>Front-end</h3>
            <div className='wheel'>
                    <span className='icons'><DiJavascript1 size={50} />Javascript (ES6)</span>
                    <span className='icons'><DiCss3 size={50} />CSS3</span>
                    <span className='icons'><DiHtml5 size={50} />HTML5</span>
                    <span className='icons'><DiReact size={50} />React</span>
                    <span className='icons'><SiRedux size={50} />Redux</span>
                    {/* <span className='icons'><DiReact size={50} />React-native</span>
                    <span className='icons'><SiExpo size={50} />Expo-cli</span> */}
                    <span className='icons'><DiBootstrap size={50} />Bootstrap4</span>
                    <span className='icons'><SiMaterialUi size={50} />Material UI</span>

            </div>
            <h3>Back-end</h3>
            <div className='wheel'>
                    <span className='icons'><SiNodeDotJs size={50} />Node</span>
                    <span className='Express'>     Express</span>
                    <span className='icons'><DiSqllite size={50} />SQLite</span>
                    <span className='icons'><SiPostgresql size={50} />PostgreSQL</span>
                    {/* <span className='icons'><SiGraphql size={50} />GraphQL</span> */}
                    <span className='icons'><SiMongodb size={50} />MongoDB</span>

            </div>
            <h3>other</h3>
            <div className='wheel'>
                    <span className='icons'><DiGit size={50} />Git</span>
                    <span className='icons'><DiLinux size={50} />Linux</span>
                    <span className='icons'><DiScrum size={50} />SCRUM Methodology</span>

            </div>
        </div>
    )
}

export default Skills;