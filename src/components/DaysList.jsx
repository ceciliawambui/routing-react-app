// src/DaysList.js
import React from 'react';

const DaysList = () => {
  // Array of days of the week
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Days of the Week</h2>
      <ul className="list-disc pl-5 space-y-2">
        {daysOfWeek.map((day, index) => (
          // Each list item should have a unique 'key' prop
          <li key={index} className="text-lg text-gray-700">
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaysList;
