import React from 'react';
// import './styles.css';
import '../../Navbar/Theme.css'

function Home(props) {

    const mode = props.theme ? 'light' : 'dark';

    mode.concat(' container');

    return (
        <div  className={mode}>
            <h1>Home</h1>
        </div>
    )
}

export default Home;
