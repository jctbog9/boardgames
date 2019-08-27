import React from 'react';
import Board from '../../board/root'
import styles from './styles.css';

const BoardPage = () => (
  <main className={styles.root}>
    <h1 className={styles.headline}>Let's play chess!</h1>
    <Board/>
  </main>
);

export { BoardPage };
