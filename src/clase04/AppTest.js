import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Counter from './Counter';
import Container, { Row, Column } from './Grid';
import NotasApp from './NotasApp';
import TestApp from './Test';

class App extends Component {
	render () {
		return (
			<React.Fragment>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
				</div>
				<TestApp />
				<Container>
					<Row>
						<Column sizes={{sm: 6, md: 4}}>
							<Counter initialValue={10} />
						</Column>
						<Column sizes={{sm: 6, md: 4}}>
							<Counter initialValue={20} />
						</Column>
						<Column sizes={{sm: 6, md: 4}}>
							<Counter initialValue={30} />
						</Column>
					</Row>
				</Container>
				<br /><br />
				<NotasApp />
			</React.Fragment>
		);
	}
}

export default App;
