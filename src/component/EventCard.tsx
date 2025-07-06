import React from 'react';
import { type Event } from '../services/Event';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface Props {
    event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
    return (
        <div className="event-card">
            <div className="event-image-wrapper">
                <img src={event.imageUrl} alt={event.title} className="event-image" />
                <div className="event-location">
                    <LocationOnOutlinedIcon/>
                    {event.location}
                </div>
            </div>
            <div className="event-content">
                <div className="event-date">
                    <CalendarMonthOutlinedIcon/>
                    {event.date}
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <button className="courses-button">
                    <span>
                        VIEW DETAILS
                    </span>
                </button>
            </div>
        </div>
    );
};

export default EventCard;
