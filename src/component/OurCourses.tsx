import React, { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import '../styles/OurCourses.css';
import { useNavigate } from 'react-router-dom';


const courses = [
  {
    id: 1,
    title: 'CLUB 1',
    description: 'Amet minim mollit no duis deserut lamo sit enim aliqua dolor do amet sint Velit officia consequt.',
    image: '/assets/images/course-1.jpg',
  },
  {
    id: 2,
    title: 'CLUB 2',
    description: 'Amet minim mollit no duis deserut lamo sit enim aliqua dolor do amet sint Velit officia consequt.',
    image: '/assets/images/course-2.jpg',
  },
  {
    id: 3,
    title: 'CLUB 3',
    description: 'Amet minim mollit no duis deserut lamo sit enim aliqua dolor do amet sint Velit officia consequt.',
    image: '/assets/images/course-3.jpg',
  },
];

const OurCourses: React.FC = () => {
    const navigate = useNavigate();

    // State lưu danh sách các club đã bấm tham gia (chờ duyệt)
    const [pendingClubs, setPendingClubs] = useState<number[]>([]);

    // Các club đã tham gia thành công (ví dụ ở đây club2)
    const joinedClubs = [2];

    // Determine login status once per render
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handleJoinClick = (id: number) => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            if (joinedClubs.includes(id)) {
                navigate(`/members/${id}`);
                return;
            }

            if (!pendingClubs.includes(id)) {
                setPendingClubs([...pendingClubs, id]);
            }
        }
    };

    return (
        <section className="courses-section">
            <div>
                <h4>
                    <CircleIcon sx={{ fontSize: '7px' }} /> 
                        GOLF CLUB
                    <CircleIcon sx={{ fontSize: '7px' }} />   
                </h4>
                <h2 className="courses-heading">
                    Danh sách câu lạc bộ
                </h2>
            </div>
            <div className="courses-grid">
                {courses.map((item, index) => (
                    <div className="courses-card" key={index}>
                        <div className="courses-image-wrapper">
                            <div className="courses-image-wrap">
                                <img src={item.image} alt={item.title} className="courses-image" />
                                <img src={item.image} alt={item.title} className="courses-image-overlay" />
                            </div>        
                        </div>
                        <div className="courses-subheading">    
                            <h3 className="courses-title">{item.title}</h3>
                            <p className="courses-desc">{item.description}</p>
                            <button className="courses-button" onClick={() => handleJoinClick(item.id)}>
                                <span>
                                {!isLoggedIn
                                    ? "THAM GIA NGAY"
                                    : joinedClubs.includes(item.id)
                                        ? "XEM"
                                        : pendingClubs.includes(item.id)
                                        ? "CHỜ PHÊ DUYỆT"
                                        : "THAM GIA NGAY"}

                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="visitBtn">
                <span>
                    VIEW MORE CLUB
                </span>
            </button>
        </section>
    );
};

export default OurCourses;