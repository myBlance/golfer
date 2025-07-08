import React, { useState } from 'react';
import EventCard from './EventCard';
import { type Event } from '../services/Event';
import '../styles/events.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const mockEvents: Event[] = [
  {
    id: '1',
    date: '20 AUGUST, 2024',
    title: 'Interactive Golf Play for Beginners & Experts',
    description: 'Amet minim mollit no duis deserunt lamo sit enim aliqua dolor.',
    location: '6391 Elgin St. Celina, Delaware',
    imageUrl: '/assets/images/event-1.jpg',
  },
  {
    id: '2',
    date: '21 AUGUST, 2024',
    title: 'Starter Golf Clinic and Casual Contest',
    description: 'Amet minim mollit no duis deserunt lamo sit enim aliqua dolor.',
    location: '6391 Elgin St. Celina, Delaware',
    imageUrl: '/assets/images/event-2.jpg',
  },
  {
    id: '3',
    date: '22 AUGUST, 2024',
    title: 'The Sponsorship Meetup is Returning',
    description: 'Amet minim mollit no duis deserunt lamo sit enim aliqua dolor.',
    location: '6391 Elgin St. Celina, Delaware',
    imageUrl: '/assets/images/event-3.jpg',
  },
];

const EventsSection: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + mockEvents.length) % mockEvents.length);
    };

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % mockEvents.length);
    };

    return (
        <section className="events-section">
            <p className="events-subtitle"> • UPCOMING EVENTS • </p>
            <h2 className="events-title">
                LET US MAKE YOUR GOLF TRIP GOLF EVENTS
            </h2>
            
            <div className="events-cards">
                <div
                    className="events-cards-track"
                    style={{
                    transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
                    }}
                >
                    {mockEvents.concat(mockEvents).map((event, idx) => (
                    <EventCard key={idx} event={event} />
                    ))}
                </div>
            </div>


            <div className="events-pagination">
                <button className="nav-btn prev" onClick={prevSlide}>
                    <ArrowBackIcon />
                </button>
                <button className="nav-btn next" onClick={nextSlide}>
                    <ArrowForwardIcon />
                </button>
            </div>
        </section>
    );
};

export default EventsSection;
