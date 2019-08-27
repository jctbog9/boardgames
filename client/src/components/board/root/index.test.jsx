import React from 'react';
import { cleanup } from 'react-testing-library';
import { shallow } from 'enzyme'
import Board from './index'

afterEach(cleanup);

describe('BoardPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Board />);
  });

  it('should render a Board component', () => {
    const boardSquare = wrapper.find('BoardSquare')
    expect(boardSquare).toExist()
    expect(boardSquare.length).toBe(64)
  })

  it('should render 32 squares of each color', () => {
    const boardSquares = wrapper.find('BoardSquare')
    const whiteSquares = boardSquares.findWhere(square => square.prop('styles') === 'whiteSquare')
    const blackSquares = boardSquares.findWhere(square => square.prop('styles') === 'blackSquare')
    expect(whiteSquares.length).toBe(32)
    expect(blackSquares.length).toBe(32)
  })
})
