import { useState } from 'react';
import '../styles/HeroSlider.css';
import { useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const slides = [
    {
        title: "UNPARALLELED PREMIUM GOLF EXPERIENCE",
        subtitle: "LEAVE YOUR MARK",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ridiculus tellus.",
        img: "/assets/images/banner-1.jpg",
    },
    {
        title: "UNPARALLELED PREMIUM GOLF EXPERIENCE",
        subtitle: "LEAVE YOUR MARK",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ridiculus tellus.",
        img: "/assets/images/banner-2.jpg",
    },
    {
        title: "UNPARALLELED PREMIUM GOLF EXPERIENCE",
        subtitle: "LEAVE YOUR MARK",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ridiculus tellus.",
        img: "/public/assets/images/banner-3.jpg",
    },
];
const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
    }, [current]);

    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    className={`slide ${index === current ? 'active' : ''}`}
                    key={index}
                    style={{ backgroundImage: `url(${slide.img})` }}
                >
                    <div
                        className="slide-bg"
                        style={{ backgroundImage: `url(${slide.img})` }}
                    />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <div className={`slide-content ${index === current ? 'active' : ''}`}>
                                <h4 className="subtitle">{slide.subtitle}</h4>
                                <h1 className="title">{slide.title}</h1>
                                <p className="desc">{slide.text}</p>
                                <button className="visitBtn">
                                    <span>
                                        LEARN MORE
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button className="nav-btn prev" onClick={prevSlide}>
                <ArrowBackIcon />
            </button>
            <button className="nav-btn next" onClick={nextSlide}>
                <ArrowForwardIcon />
            </button>

            <div className="banner-curve" >
                
            </div>
        </div>
    );
};

export default HeroSlider;
