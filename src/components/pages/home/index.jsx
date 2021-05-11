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
                <span className="header"><AiOutlineCode /> portfolio:node - Konsole</span>
                {/* terminal body */}
                <div className="body">

                    <span className="bash">[pancho@pancho-aspirees1311 <p>~</p> ] $
                        <span className="text">
                            <p className="typer1">
                                Hi there! my name is francisco
                            </p>                        
                    </span>
                        </span>
                    <span className="bash">[pancho@pancho-aspirees1311 <p>~</p> ] $
                        <span className="text">
                            <p className="typer2">
                                I'm a full-stack web dev from Bariloche, based in Bs As
                            </p>
                        </span>
                    </span>
                    <span className="bash">[pancho@pancho-aspirees1311 <p>~</p> ] $
                        <span className="text">
                            <p className="typer3">
                                I like to code, and I love to learn new technologies
                            </p>
                        </span>
                    </span>
                    <span className="bash">[pancho@pancho-aspirees1311 <p>~</p> ] $
                        <span className="text">
                            <p className="typer4">
                                I think the internet is for making our lives easier
                            </p>
                        </span>
                    </span>
                    <span className="bash">[pancho@pancho-aspirees1311 <p>~</p> ] $
                        <span className="text">
                            <p className="typer5">
                                I'm open to work or colaborate in new projects!
                            </p>
                        </span>
                    </span>

                </div>
                {/* terminal body */}
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
