import axios from 'axios';
import React, { useState,useEffect} from 'react'

var breed = "husky";
var url = "https://dog.ceo/api/breed/"+breed+"/images"
function Images() {
    const [images, setimages] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(res =>{
            setimages(res.data.message);
            console.log(res.data.message);
        })
        
    }, [])
    function ShowImage(){
        return images.map((img,index)=>(
            <img
                alt="loading..."
                src={img}
                style={{
                    height:"20%",
                    width:"50%",
                    margin:"20px",
                    borderRadius:"10%"
                }}
                onClick="window.open()"
                // index={index}
                // key={index}
            />
        ));
    }
    return (
        <div>
            {ShowImage()}
            <button 
            alt = " "
            onClick={() => window.location.reload(false)}
            style={{
                fontSize:"30px",
                height: "20%",
                width: "100%",
                margin: "20px",
                backgroundColor: "black",
                color:"white",
                // borderRadius:"20%"
            }}
            >
                Load more!
            </button>
        </div>
    )
}

export default Images
