import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import "./Conct.css";
function Contact() {
    return (
        <>
            <section className="contact-section" id="contact" aria-label="Contact information">
                <div className="container">
                    <div className='contact-header'>
                        <h2 className='contact-title'>Get In Touch</h2>
                        <p className='contact-subtitle'>Follow us on social media for the latest updates and delicious content</p>
                    </div>
                    <div className='social-links'>
                        <a href="https://facebook.com/orsabakery" className="social-link facebook" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='social-icon' />
                            <span>Facebook</span>
                        </a>
                        <a href="https://wa.me/442012345678" className="social-link whatsapp" aria-label="Contact us on WhatsApp" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className='social-icon' />
                            <span>WhatsApp</span>
                        </a>
                        <a href="https://youtube.com/@orsabakery" className="social-link youtube" aria-label="Subscribe to our YouTube channel" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='social-icon' />
                            <span>YouTube</span>
                        </a>
                        <a href="https://instagram.com/orsabakery" className="social-link instagram" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='social-icon' />
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <h4>Visit Our Store</h4>
                            <p>123 Baker Street, London, UK</p>
                        </div>
                        <div className="contact-item">
                            <h4>Call Us</h4>
                            <p>+44 20 1234 5678</p>
                        </div>
                        <div className="contact-item">
                            <h4>Opening Hours</h4>
                            <p>Mon-Sun: 7:00 AM - 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact