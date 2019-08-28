import React from 'react';
import PropTypes from 'prop-types';

const BoardSquare = ({ styles, initialPiece }) => (
  <main className={styles}>
    {initialPiece && (
      <img src={initialPiece} alt="chess piece"/>
    )}
  </main>
);

BoardSquare.propTypes = {
  styles: PropTypes.string,
}

export { BoardSquare };
