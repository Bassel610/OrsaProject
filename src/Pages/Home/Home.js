import About from "../../Componand/home/About/About"
import Conect from "../../Componand/home/Conect/Conect"
import FirstView from "../../Componand/home/FirstSection/FirstyView"
import Foter from "../../Componand/home/Footer/Footer"
import Margin from "../../SameCompanad/Margin"
import Servace from "../../Componand/home/Service/Service"

function Home () {
    return (
        <>
            <Margin />
            <FirstView />
            <About />
            <Servace />
            <Conect />
            <Foter />
        </>
    )
}
export default Home