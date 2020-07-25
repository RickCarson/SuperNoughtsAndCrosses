
const GameService = {
  calculateWinner: (squares, gridSize, toWin) => {

  if (!squares)
    return null; 

  let count = 0;

  for (let row = 0; row < gridSize; row++){
    for (let col = 0; col < gridSize; col++) {

      let playerPos = col + row * gridSize
      let player = squares[playerPos];

        //check horizontal
        count = 0;
        for (let i = 0; i < toWin; i++) {
          count += player && player === squares[playerPos+i] ? 1 : 0;
          if (count >= toWin)
            return player;
        }

        //check virtical 
        count = 0;
        for (let i = 0; i < toWin; i++) {
          count += player && player === squares[playerPos+i*gridSize] ? 1 : 0;
          if (count >= toWin)
            return player;
        }

        //check diaginal
        count = 0;
        for (let i = 0; i < toWin; i++) {
          count += player && player === squares[playerPos+(i*gridSize+i)] ? 1 : 0;
          if (count >= toWin)
            return player;
        }
    }
  }
  return null;
},

range: (min, max) => {
  return Array.from({ length: max - min + 1}, (_, i) => min + i)
}

}

export default GameService 
