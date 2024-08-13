import React from 'react';
import BotCard from './BotCard';

// Component to render the user's selected bot army
function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      {/* Map through the army array and render a BotCard for each bot */}
      {army.map((bot) => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          handleClick={() => releaseBot(bot)}
          handleDischarge={() => dischargeBot(bot)}
          isInArmy={true}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
