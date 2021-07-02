import React from 'react'
import './cardStyles.css'

const Card = ({ img, imgAlt, text, title }) => {
    return (
        <>

            <div className="cardContainer">
                <div className="card-header">
                    <span className="subtitle">{title}</span>
                    <img className="card-img" alt={imgAlt} src={img} />
                </div>
                <div className="card-body">
                    <p>{text}</p>
                </div>
            </div>
           
        </>
    )
}

export default Card
