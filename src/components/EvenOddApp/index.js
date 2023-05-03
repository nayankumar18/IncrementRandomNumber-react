import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0, status: 'Count is Even'}

  generateRandomNumber = () => {
    const min = 1
    const max = 101
    const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + randomNumber1,
    }))
    const {randomNumber} = this.state
    const result = randomNumber + randomNumber1
    if (result % 2 === 0) {
      this.setState({status: 'Count is Even'})
    } else {
      this.setState({status: 'Count is Odd'})
    }
  }

  render() {
    const {randomNumber, status} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1>Count {randomNumber}</h1>
          <p> {status}</p>
          <button type="button" onClick={this.generateRandomNumber}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
