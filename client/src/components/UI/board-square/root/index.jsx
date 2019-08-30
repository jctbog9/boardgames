import React from 'react';
import PropTypes from 'prop-types';

const BoardSquare = ({ styles, piece, movePiece, id }) => (
  <main className={styles} onClick={movePiece} id={id}>
    {piece && (
      <img src={piece} alt="chess piece" id={id} />
    )}
  </main>
);

BoardSquare.propTypes = {
  styles: PropTypes.string,
  piece: PropTypes.string,
  movePiece: PropTypes.func,
  id: PropTypes.number,
}

export { BoardSquare };
