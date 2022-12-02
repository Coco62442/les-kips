import "./css/Sante.css"
import Sida from "../components/Mst/Sida"
import Herpes from "../components/Mst/Herpes"
import Syphilis from "../components/Mst/Syphilis"
import Chlamydiae from "../components/Mst/Chlamydiae"

function Sante() {
    return(
        <div style={ { margin: "1.5%" } }>
            <Sida/>
            <Herpes/>
            <Syphilis/>
            <Chlamydiae/>
        </div>
    )
}

export default Sante