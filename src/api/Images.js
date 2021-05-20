import axios from 'axios';
import React, { useState,useEffect} from 'react'
import './Images.css';
// import {Img} from 'react-image';
function Images() {
    const [images, setimages] = useState([]);
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random/50")
        .then(res =>{
            setimages(res.data.message);
            console.log(res.data.message);
        })
        
    }, [])
    function ShowImage(){
        return images.map((img,index)=>(
            <img src={img} style={{
                width: "60%",
                height: "40%",
                borderRadius: "5%",
                margin:"10px"
              }}
              alt=""/>
            // <Img
            //     src={img}
            //     index={index}
            //     key={index}
            //     className="styleImage"
            // />
        ));
    }
    return (
        <div>
            {ShowImage()}
        </div>
    )
}

export default Images