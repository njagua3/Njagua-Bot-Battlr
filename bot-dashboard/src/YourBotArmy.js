// YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, removeBotFromArmy, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      {army.length === 0 ? (
        <p>No bots in your army yet!</p>
      ) : (
        army.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onClick={() => removeBotFromArmy(bot.id)} 
            onDelete={() => dischargeBot(bot.id)} 
          />
        ))
      )}
    </div>
  );
};

export default YourBotArmy;
