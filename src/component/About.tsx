import '../styles/About.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About: React.FC = () => {
    return (
        <section className="about-container">
            <div className="about-left">
                <span className="about-subheading">ABOUT GOLFER •</span>
                <h1 className="about-heading">
                    IMMERSE YOURSELF IN <br /> A LUXURY GOLF <br /> OUTING
                </h1>
                <p className="about-description">
                    Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu id in.
                    Quisque porttitor tortor blandit nunc sed ac id. Mattis in nunc libero
                    viverra. Consectetur leo nibh ac at amet.
                </p>
                <ul className="about-features">
                    <li>
                        <CheckCircleIcon sx={{color:'#7ba979'}}/>
                        Free Guide Book
                    </li>
                    <li>
                        <CheckCircleIcon sx={{color:'#7ba979'}}/> 
                        Group Membership Level
                    </li>
                    <li>
                        <CheckCircleIcon sx={{color:'#7ba979'}}/> 
                        24/7 Full Support
                    </li>
                </ul>
                <button className="visitBtn">
                    <span>
                        LEARN MORE
                    </span>
                </button>
            </div>

            <div className="about-right">
                <div className="about-decor-circle"></div>
                <img src='/assets/images/about-1.jpg' alt="Main" className="about-main-image" />
                <div className="about-inset-wrapper">
                    <img src='/assets/images/about-2.jpg' alt="Inset 1" className="about-inset-image1" />
                </div>
                <div className='about-inset-wrapper2'>
                    <img src='/assets/images/shape-1.png' alt="Inset 2" className="about-inset-image2" />
                </div>
            </div>
        </section>
    );
};

export default About;
