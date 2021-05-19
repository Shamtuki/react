import Square from './Button'
import Header from './Header'
import {useState} from 'react'

const Board = () => {
    //const status = 'Next player: X';
    
    const [squaresValue, setSquareValue] = useState(
        {
            history: [{
                squares: Array(9).fill(null),
            }],
            //squares: Array(9).fill(null),
            xIsNext: true,
        }
    )
    //console.log(setSquareValue)
    const handleClick = (i) => {
        const squares = squaresValue.history[0].squares.slice();
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        squares[i] = squaresValue.xIsNext ? 'X' : 'O';
        setSquareValue({
            history: [{
                    squares: squares
                }],
            xIsNext: !squaresValue.xIsNext,
        });
    }
    const renderSquare = (i) => {
        //console.log(squaresValue)
        return (
        <Square value={squaresValue.history[0].squares[i]}
        onClick={() => handleClick(i)}
        />
        );
    }
    //console.log(setSquareValue[0])
    let status = 'Next player: '+ (squaresValue.xIsNext ? 'X' : 'O');
    function calculateWinner(squares) {
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
        }
    return null;
    }

    //Winner declaration
    const winner = calculateWinner(squaresValue.history[0].squares);
    //console.log(winner)
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (squaresValue.xIsNext ? 'X' : 'O');
    }
    return (
        <div className = "board-matrix">
            <div> <Header/></div>
            <div>{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board

