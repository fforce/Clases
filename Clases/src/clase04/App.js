import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AlertApp from './TestFunciones';

class App extends Component {

	handleAlert = txt => {
		return (e) => {
			e.preventDefault();
			alert(txt);
		}
	}

	render () {
		return (
			<React.Fragment>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
				</div>
				<AlertApp laFuncion={this.handleAlert} />
			</React.Fragment>
		);
	}
}

export default App;
