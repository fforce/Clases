import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
let interval
class Page extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')

    this.state = {
      loading: true,
      counter: 1
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)

    interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)
  }

  componentDidUpdate(props, state) {
    console.log('componentDidUpdate', props, state)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(interval)
  }

  render() {
    console.log('render')
    const { loading, counter } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {counter}</h1>
        </header>
        { loading
          ? 'Loading...'
          : (
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          )
        }
      </div>
    );
  }
}

export default Page;