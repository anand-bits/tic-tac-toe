// Import Card component at the beginning of your file
import Card from "../Card/Card";
import { useState } from "react";
import './Grid.css';
function Grid({ numberofCards }) {
  const [board, setBoard] = useState(Array(numberofCards).fill(""));
  const [turn,setTurn]=useState(true);


  return (
    <div className="grid-Wrapper">
        <h1 className="turn-highlight"> Current turn:{(turn)?'O':'X'}</h1>
        

    <div className="grid">
      {board.map((el, idx) => (
        <Card key={idx} player={el} />
      ))}
    </div>

    </div>

  );
}

export default Grid;
