import Cinnabon from "../../Componand/Shope/Cinnabon"
import CupCack from "../../Componand/Shope/CupCack"
import Dounts from "../../Componand/Shope/DountsCom"
import Nav from "../../Componand/home/FirstSection/Nav"
import H1Text from "../../SameCompanad/H1Text"
import Margin from "../../SameCompanad/Margin"
function Shope () {
    return (
        <>
        <Margin />
            <Nav li1="Home" />
            <H1Text H1="Dounts" />
            <Dounts />
            {/* <H1Text H1="Cupcakes" />
            <CupCack />
            <H1Text H1="Cinnabon" />
            <Cinnabon /> */}
        </>
    )

}

export default Shope