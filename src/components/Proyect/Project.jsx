import React from 'react'
import './proyectStyles.css'
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { Col, Row } from 'react-bootstrap'

const Card = ({ title, image, imgAlt, repo, siteLink, description }) => {
    return (
        <>

            <div className="project-container">
                <div className="project-header">
                    <h2 className="project-title">{title}</h2>
                    <img className="card-img" alt={imgAlt} src={image} />
                </div>

                <Row className="project-body">
                    <Col>
                        <a href={repo} target="_blank" rel="noopener noreferrer"><SiGithub size={35}/> Repo</a>
                    </Col>
                    <Col>
                        <a href={siteLink} target="_blank" rel="noopener noreferrer"><BiLinkExternal size={35} />View Site</a>
                    </Col>
                    <p>{description}</p>
                </Row>
            </div>
           
        </>
    )
}

export default Card
