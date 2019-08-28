import React, { Component } from 'react';
import { BoardSquare } from '../../UI/board-square/root';
import { xAxis } from '../../../constants/grid.js'
import { black, white } from '../../../constants/pieces.js'
import styles from './styles.css';

class Board extends Component {
  constructor(){
    super()
    this.state = {
      initialBoard: []
    }
  }

  componentDidMount(){
    this.setState({ initialBoard: this.createBoard()})
  }

  createBoard() {
    let rows = []
    for(let i = 0, rowNumber = 1; i < 8; i++, rowNumber += 1){
      const row = this.createRow(i, rowNumber)
      rows.push(row)
    }
    return rows
  }

  createRow(i, rowNumber){
    if((i + 1) % 2 === 0){
      return this.createOddRow(rowNumber)
    } else {
      return this.createEvenRow(rowNumber)
    }
  }

  createEvenRow(rowNumber){
    let row = []
    for(let i = 0; i < 8; i++){
      (i + 1) % 2 === 0 ? (
        row.push(
          <BoardSquare 
            styles={styles.blackSquare} 
            key={i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            initialPiece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
          />
        )
      ) : (
        row.push(
          <BoardSquare 
            styles={styles.whiteSquare} 
            key={i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            initialPiece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
          />
        )
      )
    }
    return row
  }

  createOddRow(rowNumber){
    let row = []
    for(let i = 0; i < 8; i++){
      (i + 1) % 2 === 0 ? (
        row.push(
          <BoardSquare 
            styles={styles.whiteSquare} 
            key={i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            initialPiece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
          />
        )
      ) : (
        row.push(
          <BoardSquare 
            styles={styles.blackSquare} 
            key={i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            initialPiece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
          />
        )
      )
    }
    return row
  }
  
  determinePiece(coordinates){
    if(coordinates.y === 1){
      if(coordinates.x === 'a' || coordinates.x === 'h'){
        return black.rook
      }
      if(coordinates.x === 'b' || coordinates.x === 'g'){
        return black.knight
      }
      if(coordinates.x === 'c' || coordinates.x === 'f'){
        return black.bishop
      }
      if(coordinates.x === 'd'){
        return black.queen
      }
      if(coordinates.x === 'e'){
        return black.king
      }
    }
    if(coordinates.y === 2){
      return black.pawn
    }
    if(coordinates.y === 7){
      return white.pawn
    }
    if(coordinates.y === 8){
      if(coordinates.x === 'a' || coordinates.x === 'h'){
        return white.rook
      }
      if(coordinates.x === 'b' || coordinates.x === 'g'){
        return white.knight
      }
      if(coordinates.x === 'c' || coordinates.x === 'f'){
        return white.bishop
      }
      if(coordinates.x === 'd'){
        return white.queen
      }
      if(coordinates.x === 'e'){
        return white.king
      }
    }
  }

  render(){
    return(
      <main>
        <div className={styles.board}>
          {this.state.initialBoard}
        </div>
      </main>
    )
  }
};

export default Board;
