import React from 'react';
import './Header.css';

const Header = ({ activeView, setActiveView }) => {
  return (
    <header className="app-header">
      <h1>Time Travel Interactive Diary</h1>
      <nav className="nav-buttons">
        {/* TODO: Implement onClick event handlers for navigation buttons */}
        <button 
          className={activeView === 'timeline' ? 'active' : ''}
          onClick={() => setActiveView('timeline')}
        >
          Timeline
        </button>
        <button 
          className={activeView === 'create' ? 'active' : ''}
          onClick={() => setActiveView('create')}
        >
          Create Event
        </button>
      </nav>
    </header>
  );
};

export default Header;
