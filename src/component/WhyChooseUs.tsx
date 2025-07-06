import '../styles/WhyChooseUs.css'; 
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const features = [
    {
        id: 1,
        icon: <MonetizationOnIcon className="feature-icon" sx={{fontSize:'40px'}}/>,
        title: '100% Success Rate',
        description: 'Amet minim mollit no duis deserunt lamo sit enim.',
    },
    {
        id: 2,
        icon: <LocalOfferIcon className="feature-icon" sx={{fontSize:'40px'}}/>,
        title: 'The Exclusive Offers',
        description: 'Amet minim mollit no duis deserunt lamo sit enim.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="why-choose-container">
                <div className="why-choose-image">
                    <img src='/assets/images/chooseus-1.png' alt="Golfer Main" className="image-main" />
                    <img src='/assets/images/shape-1.png' alt="Golfer Secondary" className="image-secondary" />
                    <div className="about-decor-circle"></div>
                </div>
                <div className="why-choose-content">
                    <p className="subtitle">WHY CHOOSE US •</p>
                    <h2 className="title">
                        BEHIND THE CURTAIN <br /> WITH RENOWNED GOLFERS
                    </h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu id in.
                        Quisque porttitor tortor blandit nunc.
                    </p>
                    <div className="features-list">
                        {features.map((feature) => (
                            <div className="feature-card" key={feature.id}>
                                <div className="icon-container">{feature.icon}</div>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
