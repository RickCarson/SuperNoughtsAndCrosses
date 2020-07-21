import React, { useState }  from 'react';
import GameSettingsForm from './board/GameSettingsForm';
import Board from './board/Board';
import { calculateWinner } from './board/BoardServices';


const useGameState = () => {
  const defaultSize = 3;
  const [gridSize, setGridSize] = useState(defaultSize);
  const [toWin, settoWin] = useState(defaultSize);
  const [playerNames, setplayerNames] = useState(['X', 'O']);
  const [squares, setsquares] = useState(Array(defaultSize*defaultSize).fill(null));
  const [nextPlayer, setnextPlayer] = useState(0);

  const setGrid = (newGridSize, newToWin) => {
    setGridSize(newGridSize);
    settoWin(newToWin);
    setsquares(Array(newGridSize*newGridSize).fill(null))
  }
  
  const setPlayersDefault = () => {
    setplayerNames(['X', 'O']);
  }

  const setAddPlayer = (playerName) => {
    setplayerNames([...playerNames, playerName.newPlayer.toUpperCase()]);
  }  

  const setSquare = (i) => {
    if (squares[i] || calculateWinner(squares, gridSize, toWin)) {
      return;
    }

    const newSquares = squares;
    newSquares[i]  = playerNames[nextPlayer];
    setsquares(newSquares);
    setnextPlayer(nextPlayer >= playerNames.length -1 ? 0 : nextPlayer + 1);
  }    

  return {     
    gridSize,
    toWin,
    playerNames,
    squares,
    nextPlayer,
    setGrid,
    setPlayersDefault,
    setAddPlayer,
    setSquare,
  }

};

const Game = (props) => {
  const {
    gridSize,
    toWin,
    playerNames,
    squares,
    nextPlayer,
    setGrid,
    setPlayersDefault,
    setAddPlayer,
    setSquare,
  } = useGameState();

  return (
    <div className="game">
      <div>
        <GameSettingsForm 
          gridSize={gridSize} 
          toWin={toWin} 
          playerNames={playerNames} 
          resetGrid={setGrid} 
          addPlayer={setAddPlayer}
          resetPlayers={setPlayersDefault}
        />
      </div>
      <div className="game-board">
        <Board 
          gridSize={gridSize} 
          toWin={toWin} 
          playerNames={playerNames} 
          squares={squares}
          handleClick={setSquare}
          nextPlayer={nextPlayer}
        />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

export default(Game)