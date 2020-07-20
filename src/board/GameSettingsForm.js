import React, { useState } from 'react';

function GameSettingsForm (props) {

  const [gridSize, setGridSize] = useState(props.gridSize);
  const [toWin, setToWin] = useState(props.toWin);
  const [newPlayer, setNewPlayer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.resetGrid(gridSize, toWin);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="boardParam"
        type="text" 
        value={gridSize}
        onChange={event => setGridSize(event.target.value)}
        placeholder="Enter Size" 
        required 
      />
      <input 
        className="boardParam"
        type="text" 
        value={toWin}
        onChange={event => setToWin(event.target.value)}
        placeholder="Length to win" 
        required 
      />
      <div className="boardParam">
        <input 
          className="boardParam"
          type="text" 
          value={newPlayer}
          onChange={event => setNewPlayer(event.target.value)}
          placeholder="Add player" 
        />
        <button 
          className="playerButton"
          onClick={() => props.addPlayer({newPlayer})}
          >
           Add Player
        </button>
        <button 
          className="playerButton"
          onClick={() => props.resetPlayers()}
          >
            Remove Players
        </button>
      </div>
      <div>{props.playerNames.map(name => name + ', ')}</div>
      
      <button>Restart Game</button>
    </form>
  )
}

export default (GameSettingsForm)