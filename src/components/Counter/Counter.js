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

  render() {
    return (
        <React.Fragment>
          <p>Current count: {this.state.count}</p>
          <button onClick={this.increment}>Increment count</button>
        </React.Fragment>
    )
  }
}

export default Counter;