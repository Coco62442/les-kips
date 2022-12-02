import CartesAccueilComponent from "../components/CartesAccueilComponent/CartesAccueilComponent";
import './css/Accueil.css';
import imageAc from '../images/imageAccueil.png';
import {Link} from "react-router-dom";

function Accueil() {
    return(
        <div>
            <div className="QuiSomme">
                <h2>Qui sommes nous ?</h2>
                <p>Ce site est un projet dans le cadre de la nuit de l’info. Missionnée par info sida, nous sommes quatre étudiants en informatique dont l’objectif est de répondre au travers de ce site aux questions que les plus jeunes sont susceptibles de se poser sur la sexualité et les maladies sexuellement transmissibles.

Ici vous pouvez vous informer sur les IST les plus communes et la contraception en répondant aux questions que vous n’osez pas poser par peur, honte ou tabou.
L’orientation sexuelle qui est de plus en plus un sujet de société est également abordée, comme les notions de consentement et de préjugé.
Vous trouverez également des contacts, des spécialistes de santé et des liens utiles, auprès desquels vous pouvez solliciter de l’aide.
</p>
            
            </div>
            <div id='dessin'>
                <img src={imageAc} alt="image page principal" />
            </div>
            
            

            <div className="Categories">
                <Link to='/Sante'>
                    <CartesAccueilComponent title="Santé" paragraph={["Info IST","Contraception", "Questionnement fréquent"]} couleur="blue"></CartesAccueilComponent>
                </Link>
                <Link to='/Bienetre'>
                    <CartesAccueilComponent title="Bien-être" paragraph={["Orientation sexuelle","Consentement", "Tabous et préjugés"]} couleur="red"></CartesAccueilComponent>
                </Link>
                <Link to='/Aide'>
                    <CartesAccueilComponent title="Aide" paragraph={["Contacts", "Les lieux où se rendre", "Liens utiles"]} couleur="yellow"></CartesAccueilComponent>
                </Link>
                <Link to='/Jeu'>
                    <CartesAccueilComponent title="Le Jeu" paragraph={["Suit les questionnements du héros pour l'aider à passer la meilleure sortie dont-il se rappellera toute sa vie"]} couleur="black"></CartesAccueilComponent>
                </Link>
                {/* 4 Cartes (boutton) sur les différentes catégories Santé/Bien être/Aide/Le jeu */}
            </div>
        </div>
    )
}

export default Accueil