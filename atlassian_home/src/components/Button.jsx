import React from "react";

function Button(props) {
	return (
		<>
			The following button will have the background color which we pass as a
			prop to it. <br />
			<br />
			<button
				style={{
					background: props.color,
					color: "white",
					padding: "6px",
					border: "none",
					borderRadius: "5%",
					borderStyle: "solid",
					borderColor: "grey",
				}}
			>
				I am a button
			</button>
		</>
	);
}

export default Button;
