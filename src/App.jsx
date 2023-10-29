import React, { useState } from 'react';
import './App.css';

import dice1 from './assets/1.png';
import dice2 from './assets/2.png';
import dice3 from './assets/3.png';
import dice4 from './assets/4.png';
import dice5 from './assets/5.png';
import dice6 from './assets/6.png';



const diceImage= [dice1,dice2,dice3,dice4,dice5,dice6];

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);



  const refreshDice=() =>{
    const ranNumber= Math.floor(Math.random() * 6) +1
    setDiceNumber(ranNumber)
  }

  return (
    <div>
      <center>
        <img
          width={300}
          height={300}
          src={diceImage[diceNumber-1]} // Use the imported image
          alt={`Dice ${diceNumber}`}
        />
        <br />
        <button  onClick={refreshDice}className="button">Roll</button>
      </center>
    </div>
  );
};

export default App;
