import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import "./Conct.css";
function Conect () {
    return (
        <>
            <div className="ContactCont">
                <div className='ContactText'>contact US</div>
                <div className='IcoCont'>
                <div className="Contact">
                    <FaFacebook className='IcoServ' />
                </div>
                <div className="contact">
                    <FaWhatsapp className='IcoServ' />

                </div>
                <div className="contact">
                    <FaYoutube className='IcoServ' />

                </div>
                <div className="contact">
                    <FaInstagram className='IcoServ' />

                </div>
                </div>
            </div>
        </>
    )
}
export default Conect