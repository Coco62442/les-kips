import CartesHomeComponent from "../components/CartesHomeComponent/CartesHomeComponent";

function Home() {
    return(
        <div>
            <div id="QuiSomme">
                <h2>Qui sommes nous ?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa impedit eos maiores molestias architecto ullam iure! Labore laborum delectus repellat eos aspernatur eum mollitia facere distinctio, amet quos facilis.</p>
            </div>

            <div id='dessin'>
                Image
            </div>
            

            <div id="Categories">
                <CartesHomeComponent title="Santé" paragraph={["Info IST","Contraception", "Questionnement fréquent"]}></CartesHomeComponent>
                <CartesHomeComponent title="Bien-être" paragraph={["Orientation sexuelle","Consentement", "Tabous et préjugés"]}></CartesHomeComponent>
                <CartesHomeComponent title="Aide" paragraph={["Contacts", "Les lieux où se rendre", "Liens utiles"]}></CartesHomeComponent>
                <CartesHomeComponent title="Le Jeu" paragraph={["Suit les questionnements du héros pour l'aider à passer la meilleure sortie dont-il se rappellera toute sa vie"]}></CartesHomeComponent>
                {/* 4 Cartes (boutton) sur les différentes catégories Santé/Bien être/Aide/Le jeu */}
            </div>
        </div>
    )
}

export default Home