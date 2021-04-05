import React from 'react';
import './styles.css';
import tux from '../../img/tux.png';

function Home(props) {

    // const theme = useState(props.theme)
    console.log('theme en home', props.theme);
    // const str = "I'm a Full Stack Developer front-end oriented from Argentina. I love design and build responsive websites. My goal is to make web pages or mobile apps as prettier as they can be, with the best UX (user experience) possible without forgetting the perfomance. The internet is to make our lives easier :)"


    return (
        <div className='containerH'>
            <div className="terminal"></div>
            <div className="tux">
                <span></span>
                <span></span>
                <span></span>
                <img src={tux} alt="tux linux pet"/>
            </div>
        </div>
    )
}

export default Home;
