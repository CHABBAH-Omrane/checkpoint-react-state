import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Card } from 'react-bootstrap';

class Data extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contact: [],
			info: {
				FirstName: '',
				LastName: '',
				url: '',
				age: '',
			},
			show: false,
		};
	}

	add = (e) => {
		this.setState({
			info: { ...this.state.info, [e.target.name]: e.target.value },
		});
	};
	Submit = () => {
		this.setState({
			...this.state,
			contact: [...this.state.contact, this.state.info],
			show: true,
		});
	};
	render() {
		return (
			<div className="formultwo">
				<h1 className="formulaire">Persone:</h1>

				<Form className="forma">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>FirstName</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Name"
							name="FirstName"
							onChange={this.add}
						/>
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>lastName:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter lastname"
							name="LastName"
							onChange={this.add}
						/>
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Age:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Name"
							name="age"
							onChange={this.add}
						/>
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>urlImage:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter lastname"
							name="url"
							onChange={this.add}
						/>
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Button variant="primary" onClick={this.Submit}>
						Add
					</Button>
				</Form>

				{this.state.show === true ? (
					this.state.contact.map((el, index) => (
						<Card key={index} style={{ width: '18rem' }}>
							<Card.Img variant="top" src={el.url} />
							<Card.Body>
								<Card.Title>
									{el.FirstName} {el.LastName}
								</Card.Title>
								<Card.Text>{el.age}</Card.Text>
							</Card.Body>
						</Card>
					))
				) : (
					<></>
				)}
			</div>
		);
	}
}

export default Data;
