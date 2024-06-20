import React from 'react'
import aboutVideo from '../assets/about-video.mp4'

function About() {
    return (
        <div name="about" className='about-container'>
            <div className="about-container__visuals">
                <video className='video' autoPlay loop muted>
                    <source src={aboutVideo} />
                </video>
            </div>
            <div className="about-container__text">
                <h3>
                    Transform into a enviroment friendly culture -
                </h3>
                <h2>GreenGate's Revolution.</h2>
                <p>
                    We are cultured to combat carbon emissions in factories. We offer products that have a promising solution to one of the most pressing enviromental challenges of our time
                </p>
                <button className='about-btn'>Learn More</button>
            </div>
        </div>
    )
}

export default About