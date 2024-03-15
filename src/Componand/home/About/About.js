import dounts from "../../../Media/Videos/dounts.mp4";
import SCO from "../../../Media/Images/SCO.jpg"
import "./AboutUs.css";
function About () {
    return (
        <>
        <div className="About-Us">
            <div className="TextAbout">
                <div className="H4About">Oras</div>
                <div className="Text">When you wanna feel your best, when you are flavor obsessed there's only one way to refresh, 
                you just gotta Jamba.  to your whirl'd and the fresh to flavor with our donuts, 
                bowls, donuts and Cupcake. Now you can also taste the impossible with our chocolate or Lotus sauce .
                order ahead, you know you just gotta.</div>
            </div>
            <div className="ImgAbout">
                <img src={SCO} 
                alt="phot" 
                className="ImgAb" />
                {/* <img src="https://v1.cdnpk.net/videvo_files/video/premium/video0441/large_watermarked/05_klubn_sok_20_put_klubn_FPpreview.mp4" /> */}
            </div>
            <div className="VideoBout">
                <video  className="FirVid" autoPlay loop muted >
                    <source src={dounts} />
                </video>
            </div>
        </div>
        </>
    )
}
export default About;