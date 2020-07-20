import React from 'react';
import Square from './Sqaure';
import { calculateWinner, range } from './BoardServices';

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

    console.log('range(1, gridSize)', range(1, gridSize));
   
    return range(1, gridSize).map(x => 
      <div className="board-row" key={x}>
        { range(1, gridSize).map(y =>this.renderSquare((x*gridSize) + y)) }
      </div>
      )

//    for (var i = 0; i < gridSize; i++) {
//
//      for (var j = 0; j < gridSize; j++) {
//        row.push(this.renderSquare((i*gridSize) + j))
//      }
//
//      grid.push(<div className="board-row" key={i}>{row}</div>);
//      row = [];
//  
//    }
//
//    return grid;
//
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