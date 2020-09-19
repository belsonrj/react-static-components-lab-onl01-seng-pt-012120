import React, { Component } from 'react';
import CatComponent from './CatComponent'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent'
import MouseComponent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<p><GraceHopperQuoteComponent /></p>
				<MouseComponent />
			</div>
		);
	}
}

export default App;
