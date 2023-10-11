import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<button>
				<Link to="/">Home</Link>
			</button>
			<button>
				<Link to="/page1"> go to Page1</Link>
			</button>
			<button>
				<Link to="/page2">go to Page 2</Link>
			</button>
		</div>
	);
}

export default Navbar;
