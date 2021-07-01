import React from 'react';
import henry from '../../assets/img/HenryCertificate.png';
import FCCJS from '../../assets/img/JS-FCC.png';
import FCCWD from '../../assets/img/WD-FCC.png';
import Carousel from 'react-bootstrap/Carousel'  
import './carouselStyles.css';


function BCarousel() {
    return (
        // <div className='container-fluid' >  
        <div className='Carousel'>
            <Carousel>  
                <Carousel.Item>  
                    <img 
                        src={henry}  
                        alt='henry certificate'
                    />  
                </Carousel.Item  >  
                <Carousel.Item>  
                    <img 
                        src={FCCJS}    
                        alt='FreeCodeCamp javascript certificate'
                    />  
                </Carousel.Item>
                <Carousel.Item>  
                    <img 
                        src={FCCWD}    
                        alt='FreeCodeCamp web design certificate'
                    />  
                </Carousel.Item>
            </Carousel>          
        </div>  
    )
}

export default BCarousel;
