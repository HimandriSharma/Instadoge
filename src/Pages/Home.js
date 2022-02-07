import React from 'react'
import Images from '../api/Images'
import '../App.css'

import LogoWhite from '../assets/LogoWhite.png'
function Home() {
    return (
      
        <div style={{
            height:"100%",
            width:"100%",
            backgroundColor:"black",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <div style={{
                width:"100vw",
                height:"fit-content",
                backgroundColor:"black",
                position:"sticky",
                top:"0"
            }}>
                <img src={LogoWhite}
                    alt = "Could not load"
                    style={{
                        width:"10vmax",
                    }}
                />
            </div>
            <Images/>
        </div>
    )
}

export default Home
