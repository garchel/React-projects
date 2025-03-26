import React from 'react';
import './TimelineEvent.css';

const TimelineEvent = ({ event, isSelected, onClick }) => {
  return (
    <div 
      className={`timeline-event ${isSelected ? 'selected' : ''} ${event.category}`}
      onClick={onClick}
    >
      <div className="event-marker"></div>
      <div className="event-content">
        <h3>{event.title}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-description">{event.description.length > 100 ? `${event.description.substring(0,100)}...` : event.description}</p>
        <span className='event-category'>{event.category}</span>
      </div>
    </div>
  );
};

export default TimelineEvent;