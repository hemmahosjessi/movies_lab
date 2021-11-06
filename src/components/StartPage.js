import React from "react";
import HeaderLogo from "./HeaderLogo";
import ForwardLink from './ForwardLink'



const Startpage = () => {
  return (
    <header className="header">
        <div className='top-content'>
            <div className='site-name'>
                <HeaderLogo />
                <h1>Filmtime</h1>
            </div>
      </div>
        <div className='header-text'>
            <h2>Grab some popcorn!</h2>
            <ForwardLink />
        </div>
        <p className='preamble'>
        On December 28, 1895, the world’s first commercial movie screening takes place at the Grand Cafe in Paris. The film was made by Louis and Auguste Lumiere, two French brothers who developed a camera-projector called the Cinematographe. The Lumiere brothers unveiled their invention to the public in March 1895 with a brief film showing workers leaving the Lumiere factory. On December 28, the entrepreneurial siblings screened a series of short scenes from everyday French life and charged admission for the first time.
        </p>
        

    </header>
  )
}

export default Startpage