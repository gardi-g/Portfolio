import LogoTitle from '../../assets/images/logo_50.png';
import {Link} from 'react-router-dom';
import './index.scss';
import React from 'react'
import Loader from 'react-loaders';
import Quote from '../../assets/images/quote.PNG';
const Home = () => {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                <h1>Hi,<br/>my name is &nbsp; <img src={LogoTitle} alt="logo" className="logo" /> 
                erem Acar.
                <br/>
                Welcome to my portfolio!
                </h1>
                <h2> Computer Science Student / Passionate Programmer/ Gamer/ Gym Enthusiastic</h2>
                <Link to="/contact" className = 'flat-button'>CONTACT ME</Link>
                </div>
                <div className="quote-div">
                    <img src={Quote} alt="" className="quote"></img>
                </div>    
            </div>
            <Loader type="ball-clip-rotate-pulse" />
        </>
    );
}

export default Home