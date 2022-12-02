import './css/Jeu.css';
import image1 from '../images/Plan de travail 1.png'
import image2 from '../images/Plan de travail 2.png'
import image3 from '../images/Plan de travail 3.png'
import image4 from '../images/Plan de travail 4.png'
import image5 from '../images/Plan de travail 5.png'
import image6 from '../images/Plan de travail 6.png'
import image7 from '../images/Plan de travail 7.png'

function Jeu() {
    return(
        // <!-- Conteneur principal de tout le diaporama -->
        <div className="diapo">
            {/* <!-- Conteneur des "diapos" --> */}
            <div className="elements">
                {/* <!-- Première diapo --> */}
                <div className="element active">
                    <img src={image1} alt="Image 1"/>
                    <div className="caption">
                        <h2>Image 1</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, saepe.</p>
                    </div>
                </div>
                {/* <!-- Deuxième diapo --> */}
                <div className="element">
                    <img src={image2} alt="Image 2"/>
                    <div className="caption">
                        <h2>Image 2</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, saepe.</p>
                    </div>
                </div>
                {/* <!-- Troisième diapo --> */}
                <div className="element">
                    <img src={image3} alt="Image 3"/>
                    <div className="caption">
                        <h2>Image 3</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, saepe.</p>
                    </div>
                </div>
                {/* <!-- Quatrième diapo --> */}
                <div className="element">
                    <img src={image4} alt="Image 2"/>
                    <div className="caption">
                        <h2>Image 4</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, saepe.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Flèches de navigation --> */}
            <i id="nav-gauche" className="las la-chevron-left"></i>
            <i id="nav-droite" className="las la-chevron-right"></i>
            {/* <!-- Fichiers JS --> */}
            <script src="js/scriptDiapo.js"/>
        </div>
        
    )
}

export default Jeu