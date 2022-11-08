import './index.scss'
import {Link} from "react-router-dom"
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
const Home =()=>{

    const [letterClass] = React.useState('text-animate')
    const nameArray = "shkhan".split('')
    const jobArray = "web developer.".split('')


    return(
    <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass} >H</span>
                    <span className={`${letterClass} _12`} >i</span>
                 <br />
                 <span className={`${letterClass} _13`} >I</span>
                 <span className={`${letterClass} _14`} >'m</span>
                <b> I</b>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                 />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                 />
                </h1>
                <h2>Frontend Developer / Philosopher{" :)"}</h2>
                <Link to="/contact" className="flat-button" >CONTACT ME</Link>
            </div>
            <div className='prince-bckg' ></div>
        </div>
 
        
    )

}
export default Home