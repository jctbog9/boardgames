import React from 'react';
import { cleanup } from 'react-testing-library';
import { shallow } from 'enzyme'
import { BoardSquare } from './index'

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
})
