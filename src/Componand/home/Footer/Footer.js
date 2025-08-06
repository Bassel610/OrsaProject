import "./Footer.css"
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3 className="footer-logo">Orsa Bakery</h3>
                            <p className="footer-description">
                                Crafting delicious donuts and pastries with love since 2020.
                                Made fresh daily with the finest ingredients.
                            </p>
                        </div>
                        <div className="footer-section">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4 className="footer-title">Contact Info</h4>
                            <div className="footer-contact">
                                <p>123 Baker Street, London, UK</p>
                                <p>+44 20 1234 5678</p>
                                <p>hello@orsabakery.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Orsa Bakery. All rights reserved. Made with ❤️ for donut lovers.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer