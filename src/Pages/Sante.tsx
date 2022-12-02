import "./css/Sante.css"
import Sida from "../components/Mst/Sida"

function Sante() {
    return(
        <div>
            
            <div>
                <p>
                    Page pour la santé !
                </p>
            </div>
            <div id="QuiSomme">
                <h2>IST</h2>
            <p>Les infections sexuellement transmissibles, anciennement appelées MST, sont variées et peuvent toucher toutes personnes ayant une vie sexuelle active.
                On vous aide ici à en connaître leurs transmissions, leurs symptômes, leurs traitements et leur dépistage</p>
            </div>
            <Sida/>
        
            
        </div>
    )
}

export default Sante