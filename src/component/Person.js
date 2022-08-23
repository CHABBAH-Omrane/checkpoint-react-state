import React, { Component } from 'react';

class Person extends Component {
	state = {
		count: 0,
	};

	componentDidMount() {
		setInterval(() => {
			this.setState(() => ({
				count: this.state.count + 1,
			}));
		}, 1000);
	}

	render() {
		const { name, imgSrc, bio, profession } = this.props;
		return (
			<div>
				<div>
					<h2>{this.state.count}</h2>
					<h1>{name}</h1>
					<p>{bio}</p>
					<img
						src={imgSrc}
						alt=""
						style={{ width: '700px', height: '450px' }}
					/>
					<h3>{profession}</h3>
				</div>
			</div>
		);
	}
}

export default Person;
