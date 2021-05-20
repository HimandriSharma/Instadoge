import React from 'react'
// import './components.css'
import TansitionArray from './TransitionArray'
import WhiteLogo from '../assets/LogoWhite.png'
function Home() {
    return (
      
        <div className="Home">
              <TansitionArray/>
            <img src={WhiteLogo}
                style={{
                    width:"100%",
                    height: "100%"
                }}
            />
            
        </div>
    )
}

export default Home
