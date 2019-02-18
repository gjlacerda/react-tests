import React from 'react'
import Counter from './Counter'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

describe('Counter component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter/>)
    const text = wrapper.find('Paragraph').text()
    expect(text).toEqual('Current count: 0')
  })

  it('increments the count when the button is clicked', () => {
    const wrapper = shallow(<Counter/>)
    const button = wrapper.find('button.increment')
    button.simulate('click')
    const text = wrapper.find('Paragraph').text()
    expect(text).toEqual('Current count: 1')
  })

  it('decrements the count when the decrement button is clicked', () => {
    const wrapper = shallow(<Counter/>)
    const decrementButton = wrapper.find('button.decrement')
    decrementButton.simulate('click')
    const text = wrapper.find('Paragraph').text()
    expect(text).toEqual('Current count: -1')
  })
})