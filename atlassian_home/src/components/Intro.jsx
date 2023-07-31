import React from "react";

import "../styles/Intro.css";
import IntroScreen from "../assets/intro-scr.png";

function Intro() {
	return (
		<div>
			<img src={IntroScreen} style={{ width: "100%" }} />
		</div>
	);
}

export default Intro;
