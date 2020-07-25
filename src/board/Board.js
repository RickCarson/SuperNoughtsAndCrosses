import React from 'react';
import Square from './Sqaure';
import GameService from './BoardServices';

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
    return GameService.range(1, gridSize).map(x => 
      <div className="board-row" key={x}>
        { GameService.range(1, gridSize).map(y =>this.renderSquare((x*gridSize) + y)) }
      </div>
      )
  }


  render() {
    const { gridSize, toWin, playerNames, nextPlayer, squares } = this.props;

    let status;
    
    const winner = GameService.calculateWinner(squares, gridSize, toWin);

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