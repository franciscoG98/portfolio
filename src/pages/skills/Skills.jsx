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
import { Col, Row } from 'react-bootstrap'


function Skills(props) {
   
    return (

        <div className="skillsCont">
            <h3>Front-end</h3>
            <Row className='wheel'>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiHtml5 size={60} /><br/>HTML5</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiCss3 size={60} /><br/>CSS3</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiJavascript1 size={60} /><br/>Javascript</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiReact size={60} /><br/>React</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiRedux size={60} /><br/>Redux</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiBootstrap size={60} /><br/>Bootstrap</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiMaterialUi size={60} /><br/>Material UI</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiSass size={60} /><br/>Sass</Col>
            </Row>

            <h3>Back-end</h3>
            <Row className='wheel'>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiNodeDotJs size={60} /><br/>Node</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons Express">Express</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiSqllite size={60} /><br/>SQLite</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiPostgresql size={60} /><br/>PostgreSQL</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiMongodb size={60} /><br/>MongoDB</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiMariadbfoundation size={60} /><br/>MariaDB</Col>
            </Row>

            <h3>Tools</h3>
            <Row className='wheel'>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiGit size={60} /><br/>Git</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiLinux size={60} /><br/>Linux</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><DiScrum size={60} /><br/>SCRUM</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiSlack size={60} /><br/>Slack</Col>
                <Col xs={6} sm={4} md={3} lg={2} className="icons"><SiPostman size={60} /><br/>Postman</Col>
            </Row>
        </div>
    )
}

export default Skills;