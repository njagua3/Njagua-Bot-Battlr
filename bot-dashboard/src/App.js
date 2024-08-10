// App.js
import React, { useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

const App = () => {
  const [army, setArmy] = useState([]);

  const addBotToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeBotFromArmy = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((bot) => bot.id !== id));
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <div className="app">
      <h1>Bot Army</h1>

      <YourBotArmy
        army={army}
        removeBotFromArmy={removeBotFromArmy}
        dischargeBot={dischargeBot}
      />
      <BotCollection addBotToArmy={addBotToArmy} />
    </div>
  );
};

export default App;
