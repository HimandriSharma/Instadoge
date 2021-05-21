import axios from 'axios';
import React, { useState,useEffect} from 'react'

function Images(props) {
    var breed = props.name;
var url = "https://dog.ceo/api/breed/"+breed+"/images"
    const [images, setimages] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(res =>{
            setimages(res.data.message);
            console.log(res.data.message);
        })
        
    })
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
            <div>{props.name}</div>
            {ShowImage()}
            
        </div>
    )
}

export default Images
