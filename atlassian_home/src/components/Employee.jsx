import React from "react";

function Employee(props) {
	return (
		<div>
			Employee Details:
			<h4>Name: {props.name}</h4>
			<h4>Position: {props.position}</h4>
			<h4>Location: {props.location}</h4>
		</div>
	);
}

export default Employee;
