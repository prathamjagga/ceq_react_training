import React, { useState, useEffect } from "react";

function CounterUsingHooks() {
	const [count, setCount] = useState(0); // useState(initialValue)
	// what is setCount?
	// setCount is a function which accepts the new value for
	// the state.
	// so if I call setCount(3) then count will become 3

	useEffect(() => {
		console.log(count);
	}, [count]);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		setCount(count - 1);
	}

	return (
		<div>
			Counter: {count} <br /> <br />
			<button onClick={increment}>Increment Counter</button>
			<button onClick={decrement}>Decrement Counter</button>
			{/* Conditionals in React */}
			{count>0? "Count is positive":"Count is neg. or zero"}
		</div>
	);
}

export default CounterUsingHooks;
