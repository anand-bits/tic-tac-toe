// Import Card component at the beginning of your file
import Card from "../Card/Card";
import { useState } from "react";
import './Grid.css';
import isWinner from "../../../helper/checkWinner";

function Grid({ numberofCards }) {
  const [board, setBoard] = useState(Array(numberofCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (turn==true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    const win = isWinner(board, turn ? "O" : "X");

    if (win) {
      setWinner(turn ? "O" : "X");
    }

    setBoard([...board]);
    setTurn(!turn);
  }

function reset()
{
    setTurn(true);
    setWinner(null)
    setBoard(Array(numberofCards).fill(""))

}




  return (
    <div className="grid-Wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight"> Winner is {winner}</h1>
          <button className="reset" onClick={reset}>Reset Game</button>
        </>
      )}
      <h1 className="turn-highlight"> Current turn:{turn ? 'O' : 'X'}</h1>

      <div className="grid">
        {board.map((el, idx) => (
          <Card gameEnd={winner?true:false} key={idx} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
