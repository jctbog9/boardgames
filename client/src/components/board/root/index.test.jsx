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

  it('invokes createBoard function when mounted', () => {
    const createBoard = jest.spyOn(Board.prototype, 'createBoard');
    wrapper = shallow(<Board />);
    expect(createBoard).toHaveBeenCalled();
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

  it('createBoard function should create a board with 8 rows of squares', () => {
    const instance = wrapper.instance()
    const board = instance.createBoard()
    expect(board.length).toBe(64)
  })
  
  it.each`
    i    | rowNumber | expectedFirstStyle
    ${0} | ${1}      | ${'whiteSquare'}
    ${1} | ${2}      | ${'blackSquare'}
    ${2} | ${3}      | ${'whiteSquare'}
    ${3} | ${4}      | ${'blackSquare'}
    ${4} | ${5}      | ${'whiteSquare'}
    ${5} | ${6}      | ${'blackSquare'}
    ${6} | ${7}      | ${'whiteSquare'}
    ${7} | ${8}      | ${'blackSquare'}

  `('createRow function create a row starting with $expectedFirstStyle if row number $rowNumber', ({ i, rowNumber, expectedFirstStyle, ...props }) => {
    const instance = wrapper.instance()
    const row = instance.createRow(i, rowNumber)
    expect(row[0].props.styles).toBe(expectedFirstStyle)
  })

  it('should set selectedPiece in state to selected image when selectPiece function is invoked', () => {
    const event = {
      target: {
        id: 11,
        src: 'chess piece image url'
      }
    }
    const instance = wrapper.instance()
    instance.selectPiece(event)
    expect(wrapper.state().selectedPiece).toBe(event.target.src)
  })

  it('should move selected piece if wrapper.state.selectedPiece has a value', () => {
    const event = {
      target: {
        id: 11,
        src: 'chess piece image url'
      }
    }
    wrapper.setState({ selectedPiece: event.target.src })
    const instance = wrapper.instance()
    instance.movePiece(event)
    expect(wrapper.state().initialBoard[event.target.id].props.piece).toBe(event.target.src)
    expect(wrapper.state().selectPiece).toBeFalsy()
  })
})
