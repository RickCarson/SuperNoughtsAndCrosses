import React from 'react';
import Square from './Sqaure';
import { calculateWinner } from './BoardServices';

class Board extends React.Component {

  renderSquare(i) {

    const { squares } = this.props;

    return (
      <Square 
        value={squares[i]} 
        onClick={() => this.props.handleClick(i)}
        key={i}
      />
    );
  }

  renderGrid(gridSize) {

    var grid = [];
    var row = [];

    for (var i = 0; i < gridSize; i++) {

      for (var j = 0; j < gridSize; j++) {
        row.push(this.renderSquare((i*gridSize) + j))
      }

      grid.push(<div className="board-row" key={i}>{row}</div>);
      row = [];
  
    }

    return grid;

  }


  render() {
    const { gridSize, toWin, playerNames, nextPlayer, squares } = this.props;

    let status;
    
    const winner = calculateWinner(squares, gridSize, toWin);

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + playerNames[nextPlayer];
    }

    return (
      <div>
        <div className="status">{status}</div>

        {this.renderGrid(gridSize)}       

      </div>
    );
  }
}

export default (Board)