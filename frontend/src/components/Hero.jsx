import React, { useContext } from 'react';
import bgVideo from '../assets/bg-video.mp4'
import ThemeContext from '../context/ThemeContext';

function Hero() {

  const { theme } = useContext(ThemeContext)
  console.log(theme)
  
  return (
    <main name='hero' className='hero-container'>
      <div className="hero-content">
        <div className="hero-content-text">
          <div>
            <h1>Capture Carbon.</h1>
            <h2>Upgrade Your Industry.</h2>
          </div>

          <p>
            The Best Carbon Capture Technology for small and medium scale  Industries.
          </p>

          <ul>
            <li> {'>'} Combat Air Pollution</li>
            <li> {'>'} Cleaner & Sustainable Industries</li>
            <li> {'>'} Achieve Net Zero Emmisions</li>
          </ul>

          <button className='hero-btn'>Get Started.</button>
        </div>
        <div className="hero-content-visuals">

          <video className='hero-content-video' autoPlay muted loop>
            <source src={bgVideo} />
          </video>

        </div>
      </div>
    </main>
  );
}

export default Hero;
