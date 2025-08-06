import About from "../../Componand/home/About/About"
import Contact from "../../Componand/home/Conect/Conect"
import FirstView from "../../Componand/home/FirstSection/FirstyView"
import Footer from "../../Componand/home/Footer/Footer"
import Margin from "../../SameCompanad/Margin"
import Service from "../../Componand/home/Service/Service"
import Testimonials from "../../Componand/home/Testimonials/Testimonials"
import CTA from "../../Componand/home/CTA/CTA"

function Home () {
    return (
        <>
            <Margin />
            <FirstView />
            <About />
            <Service />
            <Testimonials />
            <CTA />
            <Contact />
            <Footer />
        </>
    )
}
export default Home