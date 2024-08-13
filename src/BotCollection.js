import React from 'react';
import BotCard from './BotCard';

// Component to render a collection of bots
function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      {/* Map through bots array and render a BotCard for each bot */}
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
