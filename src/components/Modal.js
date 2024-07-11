import React from 'react';

export default function Modal({ isOpen, onClose, searchResults }) {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className=" p-4 ">
        <div className="">
          {searchResults.map((emoji, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <div className="text-4xl mb-2">{emoji.emoji}</div>
              <h2 className="text-xl font-bold mb-2">{emoji.name}</h2>
              <p>{emoji.description}</p>
              <button className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded" onClick={onClose}>
                Close
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
