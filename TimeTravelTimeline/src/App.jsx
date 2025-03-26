import { useState } from 'react';
import './App.css';
import TimelineView from './components/TimelineView';
import EventCreator from './components/EventCreator';
import FilterPanel from './components/FilterPanel';
import Header from './components/Header';

function App() {
  // TODO: Implement state for controlling which view is active (timeline or create event)
  const [activeView, setActiveView] = useState('timeline')


  return (
    <div className="app-container">
      <Header activeView={activeView} setActiveView={setActiveView}
        // TODO: Pass activeView state and setter function as props
      />
      
      <main className="main-content">
        {/* TODO: Implement conditional rendering based on activeView state */
        activeView === 'timeline' ? (
          <> 
            <FilterPanel />
            <TimelineView />
          </>
        ) : (
          <EventCreator />
        )
        }
      </main>
    </div>
  );
}

export default App;