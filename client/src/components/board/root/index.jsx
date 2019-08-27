import React, { Component } from 'react';
import { BoardSquare } from '../../UI/board-square/root';
import styles from './styles.css';

class Board extends Component {
  createBoard() {
    let rows = []
    for(let i = 0; i < 8; i++){
      const row = this.createRow(i)
      rows.push(row)
    }
    return rows
  }

  createRow(i){
    if((i + 1) % 2 === 0){
      return this.createEvenRow()
    } else {
      return this.createOddRow()
    }
  }

  createEvenRow(){
    let row = []
    for(let i = 0; i < 8; i++){
      (i + 1) % 2 === 0 ? row.push(<BoardSquare styles={styles.blackSquare} key={i}/>) : row.push(<BoardSquare styles={styles.whiteSquare} key={i} />)
    }
    return row
  }

  createOddRow(){
    let row = []
    for(let i = 0; i < 8; i++){
      (i + 1) % 2 === 0 ? row.push(<BoardSquare styles={styles.whiteSquare} key={i} />) : row.push(<BoardSquare styles={styles.blackSquare} key={i}/>)
    }
    return row
  }

  render(){
    return(
      <main>
        <div className={styles.board}>
          {this.createBoard()}
        </div>
      </main>
    )
  }
};

export default Board;
