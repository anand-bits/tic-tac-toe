// Import Card component at the beginning of your file
import Card from "../Card/Card";
import { useState } from "react";
import './Grid.css';
function Grid({ numberofCards }) {
  const [board, setBoard] = useState(Array(numberofCards).fill(""));

  return (
    <div className="grid">
      {board.map((el, idx) => (
        <Card key={idx} player={el} />
      ))}
    </div>
  );
}

export default Grid;
