import React, { Component } from "react";

export class ClassCompWithState extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}
	render() {
		return (
			<div>
				Counter: {this.state.count}
				<br />
				<br />
				<button
					onClick={() => {
						this.setState({
							count: ++this.state.count,
						});
					}}
				>
					Increment
				</button>
				<button
					onClick={() => {
						this.setState({
							count: --this.state.count,
						});
					}}
				>
					Decrement
				</button>
			</div>
		);
	}
}

export default ClassCompWithState;
