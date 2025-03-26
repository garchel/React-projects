import React, { useState } from 'react';
import './EventCreator.css';

const EventCreator = () => {
  // TODO: Implement state for the new event form
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    category: '',
    description: '',
    imageUrl: ''
  })
  
  // TODO: Implement handler for form input changes
  const handleInputChange=(e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }))
  }
  // TODO: Implement handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New event:', newEvent)
  }


  return (
    <div className="event-creator">
      <h2>Create Your Own Time Travel Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            required
            placeholder="Enter your event title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date/Time Period:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
            placeholder="Enter date or time period"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={newEvent.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="historical">Historical</option>
            <option value="cultural">Cultural</option>
            <option value="technological">Technological</option>
            <option value="fictional">Fictional</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            required
            placeholder="Describe your event"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL (optional):</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={newEvent.imageUrl}
            onChange={handleInputChange}
            placeholder="Enter image URL"
          />
        </div>

        <button type="submit" className="submit-button">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventCreator;