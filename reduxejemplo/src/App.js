import React, { Component } from 'react';

import TodoApp from './containers/TodoAppContainer'
import LoginApp from "./containers/LoginContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
      <LoginApp />
        {/*<TodoApp />*/}
      </div>
    );
  }
}

export default App;
