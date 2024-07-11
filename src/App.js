import React, { useState } from 'react';
import Header from './components/Header';
import emojiData from './data.json';
import Modal from './components/Modal';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  const handleSearch = (emoji) => {
    const results = emojiData.filter(item => item.emoji === emoji);
    setSearchResults(results);
    setIsCalendarOpen(true);
  };

  return (
    
    <div className="min-h-screen bg-yellow-300">
      <Header />
     
      <main className="container mx-auto p-4">
      <h1 className=" items-center text-white text-2xl font-bold">
      Emoji App
    </h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search emoji..."
            className=" p-2 rounded-md shadow-md"
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSearch(e.target.value);
            }}
          />
          <button
          
            onClick={() => handleSearch(document.querySelector('input').value)}
            className="mt-2 bg-yellow-500 text-white ml-2 px-9 py-2 rounded-md"
          >
            OK
          </button>
          <Modal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} searchResults={searchResults} />
        </div> 

       
      </main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {emojiData.map((emoji, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <div className="text-4xl mb-2">{emoji.emoji}</div>
              <h2 className="text-xl font-bold mb-2">{emoji.name}</h2>
              <p>{emoji.description}</p>
            </div>
          ))}
        </div>

    </div>
  );
}

export default App;