import React, { useState } from 'react';
import './styles.css';

function Home(props) {

    const theme = useState(props.theme)
    console.log('theme en home', theme);

    return (
        <div className={theme}>
            <div className='containerH'>
                <p className='top'>
                    I'm a Full Stack Developer front-end oriented from Argentina.
                    I love design and build responsive websites. My goal is to
                    make web pages or mobile apps as prettier as they can be, with the best UX
                    (user experience) possible without forgetting the perfomance. The internet is
                    to make our lives easier :) 
                    {/* <p className='tapa'>aaaaaa</p> */}
                </p>
            </div>
        </div>
    )
}

export default Home;
