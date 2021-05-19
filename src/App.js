import Board from './components/Board'
//import { status } from './components/Board'
const App = () =>{   
  
 return (
    <div className="game">
      <div className="game-board">
        <Board 
         onClick={(i) => this.handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      
    </div>
  );
}

export default App;
