import React from 'react';
import '../styles/OurFacilities2.css';

const OurFacilities2: React.FC = () => {
    return (
        <section className="our-facilities">
            <div className="our-facilities-content">
                <p className="subtitle">OUR FACILITIES •</p>
                <h2 className="headline">TAKE YOUR GAME TO THE NEXT LEVEL.</h2>
                <div className="button-group">
                    <button className="btn primary">
                        <span>BECOME A MEMBER</span>
                    </button>
                    <button className="btn secondary">
                        <span>CONTACT US</span>
                    </button>
                </div>
            </div>
            <div className="our-facilities-image">
                <img src="/assets/images/cta-1.png" alt="Golf player" />
            </div>
        </section>
    );
};

export default OurFacilities2;
