import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-T.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo'
import Loader from 'react-loaders'
//import Resume from '../About/Resume';


const Home =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray =['a','r','u','n',' ','R','e','d','d','y','','','K','a','v','a','d','i']
    const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass ('animate-hover-text')
        }, 4000)
}, [])

    return ( 
        <>
        <div className="home-page">
            <div className="text-zone">
                <h1> 
                <span className = {letterClass}>H</span>
                <span className = {`${letterClass} _12`}>i,</span>
                <br />
                <span className = {`${letterClass} _13`}>I</span>
                <span className = {`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />  //1.5 sec late 
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Junior Developer/ JavaScript / Python</h2>
                <Link to= "/contact" className='flat-button'>CONTACT ME</Link>
                {/* <Resume /> */}

            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
    }

export default Home;
