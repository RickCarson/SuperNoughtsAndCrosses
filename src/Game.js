import React from 'react';
import GameSettingsForm from './board/GameSettingsForm';
import Board from './board/Board';
import { calculateWinner } from './board/BoardServices';

class Game extends React.Component {

  state = {
    gridSize: 3,
    toWin: 3,
    playerNames: ['X', 'O'],
    squares: Array(3*3).fill(null),  
    nextPlayer: 0,
  }   


  resetGrid = (gridSize, toWin) => {
    this.setState({
      gridSize: gridSize, 
      toWin: toWin,
      squares: Array(this.state.gridSize*this.state.gridSize).fill(null),
    });
    
  }

  addPlayer = (playerName) => {
    console.log('addPlayer', playerName)
    this.setState(prevState => ({
      playerNames: [...prevState.playerNames, playerName.newPlayer.toUpperCase()],
    }));
  }

  resetPlayers = () => {
    this.setState({ playerNames: ['X', 'O'] })
  }

  setSquare = (i) => {
    const { playerNames, squares, nextPlayer, gridSize, toWin } = this.state;

    if (squares[i] || calculateWinner(squares, gridSize, toWin)) {
      return;
    }
      squares[i] = playerNames[nextPlayer];
      this.setState({
        squares : squares,
        nextPlayer: nextPlayer >= playerNames.length -1 ? 0 : nextPlayer + 1,
      });
  }  

  render() {
    return (
      <div className="game">
        <div>
          <GameSettingsForm 
            gridSize={this.gridSize} 
            toWin={this.toWin} 
            playerNames={this.state.playerNames} 
            resetGrid={this.resetGrid} 
            addPlayer={this.addPlayer}
            resetPlayers={this.resetPlayers}
          />
        </div>
        <div className="game-board">
          <Board 
            gridSize={this.state.gridSize} 
            toWin={this.state.toWin} 
            playerNames={this.state.playerNames} 
            squares={this.state.squares}
            handleClick={this.setSquare}
            nextPlayer={this.state.nextPlayer}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default(Game)