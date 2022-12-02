import CartesAccueilComponent from "../components/CartesAccueilComponent/CartesAccueilComponent";
import './css/Accueil.css';


function Accueil() {
    return(
        <div>
            <div className="QuiSomme">
                <h2>Qui sommes nous ?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa impedit eos maiores molestias architecto ullam iure! Labore laborum delectus repellat eos aspernatur eum mollitia facere distinctio, amet quos facilis.</p>
            </div>

            <div id='dessin'>
                Image
            </div>
            

            <div className="Categories">
                <CartesAccueilComponent title="Santé" paragraph={["Info IST","Contraception", "Questionnement fréquent"]} couleur="blue"></CartesAccueilComponent>
                <CartesAccueilComponent title="Bien-être" paragraph={["Orientation sexuelle","Consentement", "Tabous et préjugés"]} couleur="red"></CartesAccueilComponent>
                <CartesAccueilComponent title="Aide" paragraph={["Contacts", "Les lieux où se rendre", "Liens utiles"]} couleur="yellow"></CartesAccueilComponent>
                <CartesAccueilComponent title="Le Jeu" paragraph={["Suit les questionnements du héros pour l'aider à passer la meilleure sortie dont-il se rappellera toute sa vie"]} couleur="black"></CartesAccueilComponent>
                {/* 4 Cartes (boutton) sur les différentes catégories Santé/Bien être/Aide/Le jeu */}
            </div>
        </div>
    )
}

export default Accueil