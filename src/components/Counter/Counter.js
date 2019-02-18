import React, {Component} from 'react'
import {Paragraph} from './counter.styled'

class Counter extends Component {
  state = {
    count: 0
  }

  makeIncrementer = amount => () => {
    this.setState(prevState => ({
      count: prevState.count + amount
    }))
  }

  increment = this.makeIncrementer(1)

  decrement = this.makeIncrementer(-1)

  render() {
    return (
      <React.Fragment>
        <Paragraph>Current count: {this.state.count}</Paragraph>
        <button 
          className="increment"
          onClick={this.increment}>
            +++
        </button>
        <button
          className="decrement"
          onClick={this.decrement}>
            ---
        </button>
      </React.Fragment>
    )
  }
}

export default Counter;