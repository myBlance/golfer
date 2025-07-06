import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import '../styles/OurCourses.css';


const courses = [
  {
    id: 1,
    title: 'Courses & Instructors',
    description: 'Amet minim mollit no duis deserut lamo sit enim aliqua dolor do amet sint Velit officia consequt.',
    image: '/assets/images/course-1.jpg',
  },
  {
    id: 2,
    title: 'Golf Accommodation',
    description: 'Amet minim mollit no duis deserut lamo sit enim aliqua dolor do amet sint Velit officia consequt.',
    image: '/assets/images/course-2.jpg',
  },
  {
    id: 3,
    title: 'Fitness Center',
    description: 'Amet minim mollit no duis deserut lamo sit enim aliqua dolor do amet sint Velit officia consequt.',
    image: '/assets/images/course-3.jpg',
  },
];

const OurCourses: React.FC = () => {
    return (
        <section className="courses-section">
            <div>
                <h4>
                    <CircleIcon sx={{fontSize: '7px'}}/> 
                    OUR COURSES
                    <CircleIcon sx={{fontSize: '7px'}}/>   
                </h4>
                <h2 className="courses-heading">
                    LET US MAKE YOUR GOLF TRIP <br /> FANTASIES COME TRUE
                </h2>
            </div>
            <div className="courses-grid">
                {courses.map((item, index) => (
                <div className="courses-card" key={index}>
                    <div className="courses-image-wrapper">
                        <div className="courses-image-wrap">
                            <img src={item.image} alt={item.title} className="courses-image" />
                        </div>        
                    </div>
                    <div className="courses-subheading">    
                        <h3 className="courses-title">{item.title}</h3>
                        <p className="courses-desc">{item.description}</p>
                        <button className="courses-button">
                            <span>
                                MORE DETAILS
                            </span>
                        </button>
                    </div>
                </div>
                ))}
            </div>
            <button className="visitBtn">
                <span>
                    VIEW MORE COURSES
                </span>
            </button>
        </section>
    );
};

export default OurCourses;
