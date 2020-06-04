import React, { Component } from 'react'
import Square from './Square'
export class Board extends Component {
    state ={
        turn: 0,
        winner: 0,
        squares: [
          {
            id: 0,
            title: ' '
          },
          {
            id: 1,
            title: ' '
          },
          {
            id: 2,
            title: ' '
          },
          {
            id: 3,
            title: ' '
          },
          {
            id: 4,
            title: ' '
          },
          {
            id: 5,
            title: ' '
          },
          {
            id: 6,
            title: ' '
          },
          {
            id: 7,
            title: ' '
          },
          {
            id: 8,
            title: ' '
          },
          
        ]
      } 
      declareWinner(winner)
      {
        this.setState({winner: winner})
        this.setState({turn: 0})
        this.setState({squares: this.state.squares.map(square => {
          console.log(square.title + " here")
          if(square.title==='X'||square.title==='O')
            square.title=' '
          return square
          })})
      }
      checkWinner()
      {
        for(var i=0;i<9;i+=3)
        {
          if(this.state.squares[i].title==='X'&&this.state.squares[i+1].title==='X'&&this.state.squares[i+2].title==='X')
          {
           this.declareWinner(1)
           return;
          }
          else if(this.state.squares[i].title==='O'&&this.state.squares[i+1].title==='O'&&this.state.squares[i+2].title==='O')
          {
            this.declareWinner(2)
            return;
          }
        }
        for(var i =0 ;i<3;i++)
        {
          if(this.state.squares[i].title==='X'&&this.state.squares[i+3].title==='X'&&this.state.squares[i+6].title==='X')
           {
           this.declareWinner(1)
           return;
          }
          else if(this.state.squares[i].title==='O'&&this.state.squares[i+3].title==='O'&&this.state.squares[i+6].title==='O')
           {
            this.declareWinner(2)
            return;
          }
        }
        if(this.state.squares[0].title==='X'&&this.state.squares[4].title==='X'&&this.state.squares[8].title==='X')
           {
           this.declareWinner(1)
           return;
          }
        else if(this.state.squares[0].title==='O'&&this.state.squares[4].title==='O'&&this.state.squares[8].title==='O')
          {
            this.declareWinner(2)
            return;
          }
        if(this.state.squares[2].title==='X'&&this.state.squares[4].title==='X'&&this.state.squares[6].title==='X')
          {
           this.declareWinner(1)
           return;
          }
        else if(this.state.squares[2].title==='O'&&this.state.squares[4].title==='O'&&this.state.squares[6].title==='O')
          {
            this.declareWinner(2)
            return;
          }
      }
      checkdraw(){
        for(var i=0;i<9;i++)
        {
          if(this.state.squares[i].title===' ')
           return;
        }
        this.setState({winner: -1})
        this.setState({turn: 0})
        this.setState({squares: this.state.squares.map(square => {
          console.log(square.title + " here")
          if(square.title==='X'||square.title==='O')
            square.title=' '
          return square
          })})
      }
      onClick=(i)=>{
        if(this.state.winner!==0)
          this.setState({winner: 0});
        this.setState({squares: this.state.squares.map(square =>{
          if(square.id===i){
            // console.log(square.id +" "+ /i)
            if(square.title!=='X' || square.title!=='O')
            square.title = this.state.turn%2===0? 'X':'O';
            this.setState({turn: this.state.turn +1})
          }
          return square;
        })})
        this.checkWinner();
        this.checkdraw();
      }
    renderSquare =(i) =>{
        return <Square  id ={i} square={this.state.squares[i]} onClick = {this.onClick}/>
    }
    render() {  
        var status = this.state.turn%2===0?'Your turn player 1':'Your turn player 2';
        if(this.state.winner===1 ||this.state.winner===2 ){
         status = 'Winner: player' + this.state.winner; 
        }
        else if(this.state.winner===-1) status = 'Match Draw'
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row" >
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
        </div>
                
            </div>
        )
    }
}

export default Board
