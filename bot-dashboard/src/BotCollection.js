// BotCollection.js
import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ addBotToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onClick={() => addBotToArmy(bot)} 
        />
      ))}
    </div>
  );
};

export default BotCollection;
