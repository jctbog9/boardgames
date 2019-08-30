import React from 'react';
import { cleanup } from 'react-testing-library';
import { shallow } from 'enzyme'
import { BoardSquare } from './index'
import { black, white } from '../../../../constants/pieces'

afterEach(cleanup);

describe('BoardSquare', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      styles: 'whiteSquare'
    }
    wrapper = shallow(<BoardSquare {...props}/>)
  });

  it('should render a whiteSquare if styles props is whiteSquare', () => {
    const whiteSquare = wrapper.find('.whiteSquare')
    expect(whiteSquare).toExist()
  })

  it('should render a blackSquare if styles props is blackSquare', () => {
    wrapper.setProps({ styles: 'blackSquare' });
    const blackSquare = wrapper.find('.blackSquare')
    expect(blackSquare).toExist()
  })

  it.each`
  piece           | expected
  ${black.rook}   | ${black.rook} 
  ${black.knight} | ${black.knight}
  ${black.bishop} | ${black.bishop}
  ${black.queen}  | ${black.queen}
  ${black.king}   | ${black.king}
  ${black.pawn}   | ${black.pawn}
  `('should render black $expected if piece: $piece', ({ piece, expected, ...props }) => {
    wrapper.setProps({ piece: piece })
    const source = wrapper.find('img')
    expect(source.props().src).toBe(expected)
  })
 
  it.each`
  piece           | expected
  ${white.rook}   | ${white.rook} 
  ${white.knight} | ${white.knight}
  ${white.bishop} | ${white.bishop}
  ${white.queen}  | ${white.queen}
  ${white.king}   | ${white.king}
  ${white.pawn}   | ${white.pawn}
  `('should render white $expected if piece: $piece', ({ piece, expected, ...props }) => {
    wrapper.setProps({ piece: piece })
    const source = wrapper.find('img')
    expect(source.props().src).toBe(expected)
  })
})
