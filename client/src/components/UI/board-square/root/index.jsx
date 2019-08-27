import React from 'react';
import PropTypes from 'prop-types';

const BoardSquare = ({ styles }) => (
  <main className={styles}>
  </main>
);

BoardSquare.propTypes = {
  styles: PropTypes.string,
}

export { BoardSquare };
