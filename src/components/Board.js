import Square from './Button'
import Header from './Header'

const Board = (props) => {
    const renderSquare = (i) => {
        //console.log(squaresValue)
        return (
        <Square value={props.squares[i]}
        onClick={() => props.onClick(i)}
        />
        );
    }
    return (
        <div className = "board-matrix">
            <div> <Header/></div>
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

