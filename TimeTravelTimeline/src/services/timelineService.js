// Mock data for timeline events
const mockEvents = [
  {
    id: 1,
    title: "First Moon Landing",
    date: "July 20, 1969",
    description: "Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon during the Apollo 11 mission.",
    category: "historical",
    imageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/aldrin_apollo_11.jpg"
  },
  {
    id: 2,
    title: "The Renaissance Begins",
    date: "14th Century",
    description: "The Renaissance was a period of cultural, artistic, political, and economic rebirth following the Middle Ages in Europe.",
    category: "cultural",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1200px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
  },
  {
    id: 3,
    title: "Invention of the Internet",
    date: "1969-1991",
    description: "The development of the Internet began with ARPANET in 1969 and evolved into the World Wide Web by 1991.",
    category: "technological",
    imageUrl: "https://media.wired.com/photos/59fccff23c9f6b0d5a71cc2f/master/w_2560%2Cc_limit/ENIAC_5.jpg"
  },
  {
    id: 4,
    title: "The Singularity",
    date: "2045 (Predicted)",
    description: "A hypothetical future point where technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization.",
    category: "fictional",
    imageUrl: "https://www.extremetech.com/wp-content/uploads/2015/10/Singularity-640x353.jpg"
  },
  // Add more events as needed
];

// Function to simulate fetching timeline events from an API
export const fetchTimelineEvents = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mockEvents);
    }, 1000);
  });
};

// Function to simulate adding a new event to the API
export const addTimelineEvent = (event) => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const newEvent = {
        ...event,
        id: Date.now()
      };
      resolve(newEvent);
    }, 1000);
  });
};

export const updateTimelineEvent = (eventId, updatedEvent) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const eventIndex = mockEvents.findIndex(event => event.id === eventId)
      if (eventIndex === -1) {
        reject(new Error('Event not found'))
        return
      }
      const updated = { ...mockEvents[eventIndex], ...updatedEvent }
      resolve(updated)
    }, 1000)
  })
}

export const deleteTimelineEvent = (eventId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const eventIndex = mockEvents.findIndex(event => event.id === eventId)
      if (eventIndex === -1) {
        reject(new Error('Event not found'))
        return
      }
      resolve({sucess: true, id: eventId })
    }, 1000)
  })
}