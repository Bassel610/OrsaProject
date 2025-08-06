import dounts from "../../../Media/Videos/dounts.mp4";
import SCO from "../../../Media/Images/SCO.jpg"
import "./AboutUs.css";
function About () {
    return (
        <>
        <section className="About-Us" id="about" aria-label="About Orsa Bakery">
            <div className="container">
                <div className="TextAbout">
                    <h2 className="H4About">About Orsa Bakery</h2>
                    <div className="Text">
                        At Orsa Bakery, we're passionate about creating exceptional donuts that bring joy to every bite.
                        Our skilled bakers use only the finest ingredients to craft fresh donuts, cupcakes, and pastries daily.
                        From classic glazed to innovative flavors with chocolate and Lotus sauce, we offer something special for every taste.
                        Experience the perfect blend of tradition and innovation in every product we create.
                    </div>
                </div>
                <div className="ImgAbout">
                    <img src={SCO}
                    alt="Fresh donuts and pastries at Orsa Bakery"
                    className="ImgAb" />
                </div>
            </div>
            <div className="VideoBout">
                <video className="FirVid" autoPlay loop muted>
                    <source src={dounts} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        </>
    )
}
export default About;