// BotCard.js
import React from 'react';

const BotCard = ({ bot, onClick, onDelete }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Damage: {bot.damage}</p>
      <button onClick={onClick}>Add/Remove</button>
      <button onClick={onDelete} className="delete-btn">x</button>
    </div>
  );
};

export default BotCard;
