import React, {Component} from 'react'
import Counter from 'app/Counter'
import './home.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter/>
      </React.Fragment>
    )
  }
}

export default App