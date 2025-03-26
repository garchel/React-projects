import React, { useState, useEffect } from 'react';
import TimelineEvent from './TimelineEvent';
import './TimelineView.css';
import { fetchTimelineEvents } from '../services/timelineService';

const TimelineView = () => {
  // TODO: Implement state for timeline events and selected event
  const [timelineEvents, setTimelineEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)


  // TODO: Implement useEffect to fetch timeline events

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchTimelineEvents()
        setTimelineEvents(data)
      } catch (error) {
       console.error('Error fetching timeline events:', error) 
      }
    }

    loadEvents()
  }, [])

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      
      {timelineEvents.map(event => (
        <TimelineEvent
          key={event.id}
          event={event}
          isSelected={selectedEvent?.id === event.id}
          onClick={() => setSelectedEvent(event)}
        />
      ))}
      
      {selectedEvent && (
        <div className="event-details">
          <h2>{selectedEvent.title}</h2>
          <p className='event-date'>{selectedEvent.date}</p>
          <p className='event-description'>{selectedEvent.description}</p>
          {selectedEvent.imageUrl && (
            <img src={selectedEvent.imageUrl}
            alt={selectedEvent.title}
            className='event-image'
            />
          )}
          <span className="event-category">{selectedEvent.category}</span>
        </div>
      )}
    </div>
  );
};

export default TimelineView;