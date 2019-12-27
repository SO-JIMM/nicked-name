import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      nicknames: [],
      renderState: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch('./nickedIT.json')
      .then(response => response.json())
      .then(names => this.setState({ nicknames: names }))
  }

  handleClick() {
    this.setState({ renderState: true })
  }

  render() {
    const { nicknames, renderState } = this.state
    let random = Math.floor(Math.random() * Object.keys(nicknames).length)
    console.log(random)
    return (
      <div className='App'>
        <h1>Nicked Names</h1>
        <button onClick={this.handleClick}>Get Nickname!</button>
        <div className='displayName'>
          {(renderState)
            ?
            <h2>{nicknames[random]}</h2>
            :
            ''
          }
        </div>
      </div>
    );
  }
}

export default App