import React from 'react';
import './AboutStyles.css';
import henry from '../../img/HenryCertificate.png';
import FCC from '../../img/JS-FCC.png';

function About(props) {

    const fondo = props.theme ? 'dia' : 'noche';
    const cont = fondo + ' container';

    return (
        <div className={cont}>
            <p className='top'>
                I'm a Full Stack Developer front-end oriented from Argentina.
                I love design and build responsive websites. My goal is to
                make web pages or mobile apps as prettier as they can be, with the best UX
                (user experience) possible without forgetting the perfomance. The internet is
                to make our lives easier :)
            </p>

            <div className='fantasia'>
                <div className='education'>
                    <h2>Education</h2>
                    <ul>
                        <li>Henry</li>
                        <br />
                        <img src={henry} alt="Henry Certificate"/>
                        <li>FreeCodeCamp</li>
                        <br />
                        <img src={FCC} alt="FreeCodeCamp Certificate"/>
                        <li>UBA</li>
                        <span>Actuary, Economy oriented</span>
                        <li>Cambridge</li>
                        <span>First Certificate in English: FCE (B1)</span>
                    </ul>
                </div>
                <div className='hobbies'>
                    <h2>Hobbies</h2>
                    <ul>
                        <li>Trekking</li>
                        <li>Esqui</li>
                        <li>Pelota paleta</li>
                        <li>Music</li>
                        <li>Reading</li>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sint cupiditate maxime expedita fugiat accusamus ipsa accusantium dolores suscipit? Odit perspiciatis repellendus ratione laboriosam accusamus molestiae? Quas dignissimos commodi saepe.
                        Repudiandae dolores veniam nobis soluta molestias vitae veritatis quam officia praesentium fuga debitis beatae vel, ad tenetur dolore reprehenderit laudantium. Aperiam reprehenderit non cupiditate debitis nisi consequatur laborum assumenda dolor!
                        Non numquam nihil atque expedita laborum eos, corporis repudiandae, sequi tempora in ea aspernatur quidem fuga accusantium officia a minima velit quisquam voluptatum quos alias sit autem doloremque? Earum, a?
                        Porro fuga repudiandae inventore, aperiam vitae ad doloremque at architecto provident. Soluta porro quas est quidem facilis provident tenetur saepe, nam quos et, obcaecati nisi? Nesciunt quibusdam eius debitis obcaecati.
                        Sed voluptates minima ut molestias quo voluptatibus nesciunt? Architecto laboriosam fugit nulla laudantium modi magnam provident, labore eum blanditiis sapiente amet? Consequuntur, impedit. Perferendis dignissimos iure tenetur voluptatum dolor aspernatur.
                        Sed voluptates minima ut molestias quo voluptatibus nesciunt? Architecto laboriosam fugit nulla laudantium modi magnam provident, labore eum blanditiis sapiente amet? Consequuntur, impedit. Perferendis dignissimos iure.</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;