import { FaStar } from 'react-icons/fa';
import "./Testimonials.css";

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Regular Customer",
            rating: 5,
            text: "The best donuts in London! Fresh, delicious, and the staff is incredibly friendly. I come here every morning for my coffee and donut.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Food Blogger",
            rating: 5,
            text: "Orsa Bakery has revolutionized the donut game. Their unique flavors and perfect texture make every bite a delightful experience.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Emma Williams",
            role: "Local Resident",
            rating: 5,
            text: "I've been coming here for over a year now. The quality is consistently amazing, and they always have new flavors to try!",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar 
                key={index} 
                className={index < rating ? 'star filled' : 'star'} 
            />
        ));
    };

    return (
        <div className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">What Our Customers Say</h2>
                    <p className="testimonials-subtitle">
                        Don't just take our word for it - hear from our happy customers
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="author-image"
                                />
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
