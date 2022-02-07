import axios from 'axios';
import React, { useState,useEffect} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './Images.css';

function Images() {
    const [images, setimages] = useState([]);
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random/50")
        .then(res =>{
            setimages(res.data.message);
            console.log(res.data.message);
        })
        
    }, [])
    const [model, setModel] = useState(false);
    const [tempingSrc, setTempImgSrc] = useState('')
    function getImage(imgSrc){
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    console.log(images);
    return (
        <>
            <div className={model?"model open":"model"}>
                <img src={tempingSrc} alt=""/>
                <CloseIcon onClick={()=>setModel(false)}/>
            </div>
            <div className="gallery">
            {
                images.map((image)=>{
                    return(
                        <div className="pics" onClick={()=>getImage(image)}>
                            <img src={image} alt="" style={{width: '100%'}}/>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Images