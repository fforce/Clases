import React, { Component } from 'react';
import Page from './Page'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageVisible: true
    }
  }

  handleOnHidePage = (event) => {
    event.preventDefault()
    this.setState({ pageVisible: false })
  }

  render() {
    const { pageVisible } = this.state
    return (
      <div>
        <a href="" onClick={this.handleOnHidePage}>Esconder Page</a>
        {pageVisible && <Page />}
      </div>
    )
  }
}

export default App;