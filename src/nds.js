import React, { useEffect, useState } from 'react';
import './App.css';

function Apps() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setMessage(data[0].message); // Access the message property from the first object in the array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data from Node.js:</h1>
      <p>{message}</p>
    </div>
  );
}

export default Apps;
