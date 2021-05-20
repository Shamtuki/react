import Board from './components/Board'
import {useState} from 'react'

//import { status } from './components/Board'
const App = () =>{  
  
  const [squaresValue, setSquareValue] = useState(
        {
            history: [{
                squares: Array(9).fill(null),
            }],
            //squares: Array(9).fill(null),
            stepNumber: 0,
            xIsNext: true,
        }
    ) 
    //Winner declaration
    let status = 'Next player: '+ (squaresValue.xIsNext ? 'X' : 'O');
    console.log(squaresValue.history.squares)
    // console.log(squaresValue.stepNumber + 1)
    const history = squaresValue.history.squares.slice(0, squaresValue.stepNumber + 1);
    const current = squaresValue.history[squaresValue.stepNumber];
    const winner = calculateWinner(current.squares);
    //console.log(history)
    const squares = current.squares.slice();
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    const handleClick = (i) => {        
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        squares[i] = squaresValue.xIsNext ? 'X' : 'O';
        setSquareValue({
            history: history.concat([{
                    squares: squares
                }]),
            stepNumber: history.length,
            xIsNext: !squaresValue.xIsNext,
        });
    }
    //console.log(history)

    //console.log(current.squares)
    if (winner) {
      console.log(winner)
      status = 'Winner: ' + winner;
    } else {
      //console.log(winner)
      status = 'Next player: ' + (squaresValue.xIsNext ? 'X' : 'O');
    }
 
    
    function calculateWinner(squares) {
        //console.log(squares)
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
            // console.log(squares[a]) 
            return squares[a];
          }
        }
      return null;
    }
    const jumpTo = (step) => {
      setSquareValue({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
 return (
    <div className="game">
      <div className="game-board">
        <div>
          <Board 
            squares={current.squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div>{status}</div>
      </div>
      
      <div className="game-info">
        
        <ol>{moves}</ol>
      </div>
      
    </div>
  );
}

export default App;
