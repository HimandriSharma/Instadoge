import React from 'react'
import '../App.css'
import TansitionArray from './TransitionArray'
import LogoWhite from '../assets/LogoWhite.png'
function Home() {
    return (
      
        <div className="App">
            {/* <TansitionArray/> */}
            <img src={LogoWhite}
                alt = "Loading ..."
                style={{
                    width:"100%",
                    height: "100%"
                }}
            />
            
        </div>
    )
}

export default Home
