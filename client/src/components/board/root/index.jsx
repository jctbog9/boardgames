import React, { Component } from 'react';
import { BoardSquare } from '../../UI/board-square/root';
import { xAxis } from '../../../constants/grid.js'
import { black, white } from '../../../constants/pieces.js'
import styles from './styles.css';

class Board extends Component {
  constructor(){
    super()
    this.state = {
      initialBoard: [],
      selectedPiece: undefined,
      hasMountedFirst: false
    }
    this.selectPiece = this.selectPiece.bind(this)
    this.movePiece = this.movePiece.bind(this)
  }

  componentDidMount(){
    this.setState({ hasMountedFirst: true, initialBoard: this.createBoard()})
  }

  createBoard() {
    let rows = []
    for(let i = 0, rowNumber = 0; i < 8; i++, rowNumber += 1){
      const row = this.createRow(i, rowNumber)
      rows = rows.concat(row)
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

  selectPiece(event) {
    const image = event.target.src
    this.setState({ selectedPiece: image })
    let newBoard = this.state.initialBoard
    newBoard[event.target.id] = <BoardSquare {...newBoard[event.target.id].props} piece={undefined} key={newBoard[event.target.id].props.id}/>
    this.setState({ initialBoard: newBoard })
  }

  movePiece(event) {
    if(this.state.selectedPiece){
      let newBoard = this.state.initialBoard
      newBoard[event.target.id] = <BoardSquare {...newBoard[event.target.id].props} piece={this.state.selectedPiece} key={newBoard[event.target.id].props.id}/>
      this.setState({ initialBoard: newBoard, selectedPiece: undefined })
    } else {
      this.selectPiece(event)
    }
  }

  createEvenRow(rowNumber){
    let row = []
    for(let i = 0; i < 8; i++){
      (i + 1) % 2 === 0 ? (
        row.push(
          <BoardSquare 
            styles={styles.blackSquare} 
            id={rowNumber * 8 + i} 
            key={rowNumber * 8 + i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            piece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
            movePiece={this.movePiece}
            selectPiece={this.selectPiece}
          />
        )
      ) : (
        row.push(
          <BoardSquare 
            styles={styles.whiteSquare} 
            id={rowNumber * 8 + i} 
            key={rowNumber * 8 + i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            piece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
            movePiece={this.movePiece}
            selectPiece={this.selectPiece}
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
            id={rowNumber * 8 + i}
            key={rowNumber * 8 + i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            piece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
            movePiece={this.movePiece}
            selectPiece={this.selectPiece}
          />
        )
      ) : (
        row.push(
          <BoardSquare 
            styles={styles.blackSquare} 
            id={rowNumber * 8 + i}
            key={rowNumber * 8 + i} 
            coordinates={{
              x: xAxis[i],
              y: rowNumber
            }}
            piece={this.determinePiece({
              x: xAxis[i],
              y: rowNumber
            })}
            movePiece={this.movePiece}
            selectPiece={this.selectPiece}
          />
        )
      )
    }
    return row
  }
  
  determinePiece(coordinates){
    if(coordinates.y === 0){
      if(coordinates.x === 0 || coordinates.x === 7){
        return black.rook
      }
      if(coordinates.x === 1 || coordinates.x === 6){
        return black.knight
      }
      if(coordinates.x === 2 || coordinates.x === 5){
        return black.bishop
      }
      if(coordinates.x === 3){
        return black.queen
      }
      if(coordinates.x === 4){
        return black.king
      }
    }
    if(coordinates.y === 1){
      return black.pawn
    }
    if(coordinates.y === 6){
      return white.pawn
    }
    if(coordinates.y === 7){
      if(coordinates.x === 0 || coordinates.x === 7){
        return white.rook
      }
      if(coordinates.x === 1 || coordinates.x === 6){
        return white.knight
      }
      if(coordinates.x === 2 || coordinates.x === 5){
        return white.bishop
      }
      if(coordinates.x === 3){
        return white.queen
      }
      if(coordinates.x === 4){
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
