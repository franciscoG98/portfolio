import React from 'react';
import henry from '../../img/HenryCertificate.png';
import FCC from '../../img/JS-FCC.png';
import UBA from '../../img/uba.png';
import CAMBRIDGE from '../../img/cambridgeU.png';
 
import Carousel from 'react-bootstrap/Carousel'  
import './carouselStyles.css';


function BCarousel() {
    return (
        // <div className='container-fluid' >  
        <div>
            <Carousel>  
                <Carousel.Item>  
                    <img 
                        src={henry}  
                    />  
                </Carousel.Item  >  
                <Carousel.Item>  
                    <img 
                        src={FCC}    
                    />  
                </Carousel.Item>  
                {/* <Carousel.Item>  
                    <img 
                        src={UBA}   
                    />  
                    <Carousel.Caption>  
                    </Carousel.Caption>  
                        <h3>Third Demo</h3>  
                </Carousel.Item>
                <Carousel.Item>  
                    <img 
                        src={CAMBRIDGE}   
                    />  
                    <Carousel.Caption>  
                    </Carousel.Caption>  
                        <h3>Fourth Demo</h3>  
                </Carousel.Item>   */}
            </Carousel>          
        </div>  
    )
}

export default BCarousel;
