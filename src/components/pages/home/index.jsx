// import React, { useState } from 'react';
import React from 'react';
import './styles.css';

function Home(props) {

    // const theme = useState(props.theme)
    console.log('theme en home', props.theme);
    // const str = "I'm a Full Stack Developer front-end oriented from Argentina. I love design and build responsive websites. My goal is to make web pages or mobile apps as prettier as they can be, with the best UX (user experience) possible without forgetting the perfomance. The internet is to make our lives easier :)"


    return (
        // <div className={theme}>
            <div className='containerH'>
                {/* <p className='top'>
                    <span>I'm a Full Stack Developer front-end oriented from Argentina. I love    </span>
                    <span> design and build responsive websites. My goal is to make web pages </span>
                    <span>or mobile apps as prettier as they can be, with the best UX </span>
                    <span>(user experience) possible without forgetting the perfomance. The </span>
                    <span>internet is to make our lives easier :)</span>                    
                </p> */}
                <h1></h1>
            </div>
        // </div>
    )
}

export default Home;
