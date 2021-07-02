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
    DiBootstrap,
    DiSass,
} from "react-icons/di";
import {
    SiSlack,
    SiMaterialUi,
    SiRedux,
    SiPostman,
    SiMariadbfoundation,
    SiMongodb,
    SiNodeDotJs,
    SiPostgresql
} from "react-icons/si";


function Skills(props) {

    console.log('theme en skills', props.theme);


    
    return (

        <div className="skillsCont">
            <h3>Front-end</h3>


            {/* POR FAVOR UN COL ROW DE REACT BOOTSTRAP ACA URGENTE ME HACE MAL A LOS OJOS ESTA PORQUERIA */}
            <div className='wheel'>
                <span className='col-md-4 icons'><DiJavascript1 size={50} />Javascript</span>
                <span className='col-md-4 icons'><DiCss3 size={50} />CSS3</span>
                <span className='col-md-4 icons'><DiHtml5 size={50} />HTML5</span>
                <span className='col-md-4 icons'><DiReact size={50} />React</span>
                <span className='col-md-4 icons'><SiRedux size={50} />Redux</span>
                <span className='col-md-4 icons'><DiBootstrap size={50} />Bootstrap4</span>
                <span className='col-md-4 icons'><SiMaterialUi size={50} />Material UI</span>
                <span className='col-md-4 icons'><DiSass size={50} />Sass</span>
            </div>

            <h3>Back-end</h3>
            <div className='wheel'>
                <span className='col-md-4 icons'><SiNodeDotJs size={50} />Node</span>
                <span className='col-md-4 Express'>     Express</span>
                <span className='col-md-4 icons'><DiSqllite size={50} />SQLite</span>
                <span className='col-md-4 icons'><SiPostgresql size={50} />PostgreSQL</span>
                <span className='col-md-4 icons'><SiMongodb size={50} />MongoDB</span>
                <span className='col-md-4 icons'><SiMariadbfoundation size={50} />MariaDB</span>
            </div>

            <h3>Tools</h3>
            <div className='wheel'>
                <span className='col-md-4 icons'><DiGit size={50} />Git</span>
                <span className='col-md-4 icons'><DiLinux size={50} />Linux</span>
                <span className='col-md-4 icons'><DiScrum size={50} />SCRUM Methodology</span>
                <span className='col-md-4 icons'><SiSlack size={50} />Slack</span>
                <span className='col-md-4 icons'><SiPostman size={50} />Postman</span>
            </div>
        </div>
    )
}

export default Skills;