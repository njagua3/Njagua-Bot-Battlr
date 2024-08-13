import React from 'react';

// Component to render an individual bot's details
function BotCard({ bot, handleClick, handleDischarge, isInArmy }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      

      {/* Button to add/remove bot from army */}
      <button onClick={handleClick}>
        {isInArmy ? 'Release Bot' : 'Enlist Bot'}
      </button>

     
    </div>
  );
}

export default BotCard;
