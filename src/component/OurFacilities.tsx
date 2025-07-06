import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/OurFacilities.css';


const facilities = [
  {
    title: 'Golf Courses',
    description: 'Lorem ipsum dolor sit amet consectetur elit.',
    image: '/assets/images/service-1.jpg',
  },
  {
    title: 'Pro Instructors',
    description: 'Lorem ipsum dolor sit amet consectetur elit.',
    image: '/assets/images/service-2.jpg',
  },
  {
    title: 'Superb Caddies',
    description: 'Lorem ipsum dolor sit amet consectetur elit.',
    image: '/assets/images/service-3.jpg',
  },
  {
    title: 'Membership',
    description: 'Lorem ipsum dolor sit amet consectetur elit.',
    image: '/assets/images/service-4.jpg',
  },
];

const OurFacilities: React.FC = () => {
    return (
        <section className="facilities-section">
            <div>
                <h4>
                    <CircleIcon sx={{fontSize: '7px'}}/> 
                    OUR FACILITIES
                    <CircleIcon sx={{fontSize: '7px'}}/>   
                </h4>
                <h2 className="facilities-heading">
                    ENJOY TOP-TIER GOLFING AT THE <br /> BEST CLUB AROUND
                </h2>
            </div>
            <div className="facilities-grid">
                {facilities.map((item, index) => (
                <div className="facility-card" key={index}>
                    <div className="facility-image-wrapper">
                        <div className="facility-image-wrap">
                            <img src={item.image} alt={item.title} className="facility-image" />
                        </div>
                        <div className='circle-image'></div>
                    </div>
                    <h3 className="facility-title">{item.title}</h3>
                    <p className="facility-desc">{item.description}</p>
                    <div className="arrow-button"><ArrowForwardIcon /></div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default OurFacilities;
