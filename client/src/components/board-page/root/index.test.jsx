import React from 'react';
import { cleanup } from 'react-testing-library';
import { shallow } from 'enzyme'
import { BoardPage } from './index';

afterEach(cleanup);

describe('BoardPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BoardPage />);
  });

  it('should render a Board component', () => {
    const board = wrapper.find('Board')
    expect(board).toExist()
  })

  it('should render headline "Let\'s play chess!"', () => {
    const header = wrapper.find('h1')
    expect(header).toExist()
    expect(header).toIncludeText("Let\'s play chess!")
  })
})
