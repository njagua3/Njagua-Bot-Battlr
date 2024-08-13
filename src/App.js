import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

function App() {
  // State to store all bots and the user's bot army
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Function to add a bot to the user's army
  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Function to release a bot from the user's army
  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Function to discharge a bot from service (removes from both frontend and backend)
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <div className="App">
      <div>
      <h1>Welcome to Battlr!</h1>
      <h2>Your Bot Army</h2>
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      </div>
       <div>
      <h2>Available Bots</h2>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      </div>
    </div>
  );
}

export default App;
