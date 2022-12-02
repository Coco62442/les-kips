import {useState} from "react"

import './css/Jeu.css';
import image1 from '../images/Plan de travail 1.png'
import image2 from '../images/Plan de travail 2.png'
import image3 from '../images/Plan de travail 3.png'
import image4 from '../images/Plan de travail 4.png'
import image5 from '../images/Plan de travail 5.png'
import image6 from '../images/Plan de travail 6.png'
import image7 from '../images/Plan de travail 7.png'
const images = [image1,image2,image3,image4,image5, image6, image7]

function Jeu() {

    const [img, setImg] = useState(0)

        return (
        <div className="slide-container">
        {img !== 0 && <button style={{fontSize:"2rem",borderRadius:"1rem",cursor:"pointer"}} onClick={() => {setImg(img-1)}}>{"<"}</button>}
            <img src={images[img]} alt="Suivi du personnage dans sa quête sur la prévention sexuel"/>
            {img !== 6 && <button style={{fontSize:"2rem", borderRadius:"1rem",cursor:"pointer"}} onClick={() => {setImg(img+1)}}>{">"}</button>}
        </div>
        ) 
}

export default Jeu