import React, { Component } from 'react'
import './App.css';
import Board from './components/Board'
import Header from './components/layouts/Header'
// import Square from './components/Square';
export class App extends Component {
  
  
  render() {
    return (
      <div>
         <Header />
         <Board />
      </div>
    )
  }
}

export default App
