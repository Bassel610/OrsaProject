import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faCake, faHome, faGlobe } from '@fortawesome/free-solid-svg-icons'
import "./Service.css"
function Service() {
    return (
        <>
            <section className="Services" id="services" aria-label="Our services">
                <div className="container">
                    <h2 className='services-title'>Why Choose Orsa Bakery</h2>
                    <div className="services-grid">
                        <div className='service-card'>
                            <FontAwesomeIcon icon={faTruck} className='service-icon'/>
                            <div className='service-content'>
                                <h4 className='service-title'>Fast Delivery</h4>
                                <p className='service-description'>Quick and reliable delivery to your doorstep within 30 minutes</p>
                            </div>
                        </div>
                        <div className='service-card'>
                            <FontAwesomeIcon icon={faCake} className='service-icon' />
                            <div className='service-content'>
                                <h4 className='service-title'>Always Fresh</h4>
                                <p className='service-description'>All our donuts are made fresh daily using premium ingredients</p>
                            </div>
                        </div>
                        <div className='service-card'>
                            <FontAwesomeIcon icon={faHome} className='service-icon' />
                            <div className='service-content'>
                                <h4 className='service-title'>Handcrafted</h4>
                                <p className='service-description'>Every donut is carefully handmade with traditional techniques</p>
                            </div>
                        </div>
                        <div className='service-card'>
                            <FontAwesomeIcon icon={faGlobe} className='service-icon' />
                            <div className='service-content'>
                                <h4 className='service-title'>Unique Flavors</h4>
                                <p className='service-description'>Discover exclusive flavors you won't find anywhere else</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;