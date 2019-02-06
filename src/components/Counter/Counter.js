import React, {Component} from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
        <React.Fragment>
          <p>Current count: {this.state.count}</p>
          <button 
          className="increment"
          onClick={this.increment}>
            Increment count
          </button>
          <button
          className="decrement"
          onClick={this.decrement}>
            Decrement count
          </button>
        </React.Fragment>
    )
  }
}

export default Counter;