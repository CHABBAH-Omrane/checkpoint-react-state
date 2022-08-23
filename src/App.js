import './App.css';
import React, { Component } from 'react';
import Person from './component/Person';
import img from './component/omom.jpg';

class App extends Component {
	constructor() {
		super();
		this.state = {
			fullName: 'CHABBAH Omarne',
			bio: 'MERN Stack Developer , filled with energy, ready toinvest in new opportunities. self-trained and motivated to gain new knowledge.',
			imgSrc: img,
			profession: 'Seeking for internship opportunity',
			show: true,
		};
	}
	showData = () => {
		this.setState({
			...this.state,
			show: !this.state.show,
		});
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.showData}>Show Data</button>
				{this.state.show ? (
					<Person
						name={this.state.fullName}
						bio={this.state.bio}
						imgSrc={this.state.imgSrc}
						profession={this.state.profession}
					></Person>
				) : (
					'profile not found'
				)}
			</div>
		);
	}
}

export default App;
