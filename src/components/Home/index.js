import LogoTitle from '../../assets/images/logo-j.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'c', 'k']
    const jobArray = ['B', 'S', 'c', ' ', 'C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ']
    const scienceArray = ['S', 'c', 'i', 'e', 'n', 'c', 'e']
    const studentArray = ['S', 't', 'u', 'd', 'e', 'n', 't']
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m&nbsp;</span>
                    <img src={LogoTitle} alt="developer" className="logo" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={20} />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={scienceArray}
                        idx={25} />

                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={studentArray}
                        idx={29} />

                </h1>
                <h2>

                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}
export default Home;