import { Link } from 'react-router-dom';
import "./CTA.css";

function CTA() {
    return (
        <div className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Taste the Best Donuts in Town?</h2>
                    <p className="cta-subtitle">
                        Join thousands of satisfied customers who start their day with our fresh, 
                        handcrafted donuts. Order now and experience the difference!
                    </p>
                    <div className="cta-buttons">
                        <Link to="/shop" className="btn-primary cta-btn">
                            Order Now
                        </Link>
                        <a href="#contact" className="btn-secondary cta-btn">
                            Find Our Store
                        </a>
                    </div>
                    <div className="cta-features">
                        <div className="cta-feature">
                            <span className="feature-icon">🚚</span>
                            <span className="feature-text">Free Delivery Over £15</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">⏰</span>
                            <span className="feature-text">30-Minute Delivery</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">🍩</span>
                            <span className="feature-text">Fresh Daily</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;
