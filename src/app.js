import React, { Component } from 'react'
import './app.sass'
import Popup from './components/popup'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="overlay">
          <Popup />
        </div>
      </div>
    );
  }
}

export default App
