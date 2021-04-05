import React from 'react';
import './styles.css';
import tux from '../../img/tux.png';

import { AiOutlineCode } from "react-icons/ai";

function Home(props) {

    // const theme = useState(props.theme)
    console.log('theme en home', props.theme);
    // const str = "I'm a Full Stack Developer front-end oriented from Argentina. I love design and build responsive websites. My goal is to make web pages or mobile apps as prettier as they can be, with the best UX (user experience) possible without forgetting the perfomance. The internet is to make our lives easier :)"


    return (
        <div className='containerH'>
            <div className="terminal">
                <span className="header"><AiOutlineCode className='bashIcon' /> portfolio:node - Konsole</span>
                <span className="bash">[pancho@pancho-aspirees1311 <p>~</p> ] $
                    <span className="text">
                        Hi there! my name is francisco, I'm a full-stack web developer (trainee/Jr). I prefer frontend rather than backend, anyway I like to code, and I love to learn 
                    </span>
                </span>
                <span className="bash2">[pancho@pancho-aspirees1311 <p>~</p> ] $
                    <span className="titila"></span>
                </span>
            </div>
            <div className="tux">
                {/* los spans son las burbujas de dialogo de tux */}
                <span></span>
                <span></span>
                <span></span>
                <img src={tux} alt="tux linux pet"/>
            </div>
        </div>
    )
}

export default Home;
