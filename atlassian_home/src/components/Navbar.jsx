import React from "react";

import "../styles/Navbar.css";
import Logo from "../assets/atlassian-logo.svg";
import DownArrow from "../assets/down-arrow.svg";
import SearchIcon from "../assets/search-0nvd.png";
import ProdButton from "../assets/prodbtn.png";
function Navbar() {
	return (
		<div className="navbarContainer">
			<img className="navLogo" src={Logo} />
			<div className="navLink">
				Products <img src={DownArrow} className="navLinkArrow" />
			</div>
			<div className="navLink">
				Solutions <img src={DownArrow} className="navLinkArrow" />
			</div>
			<div className="navLink">
				Resources <img src={DownArrow} className="navLinkArrow" />
			</div>
			<div className="navLink" style={{ paddingLeft: "270px" }}>
				<img
					src={SearchIcon}
					style={{
						height: "20px",
					}}
				/>
			</div>
			<div className="navLink" style={{ padding: "14px", paddingRight: "6px" }}>
				<button
					style={{
						color: "white",
						background: "#0052CC",
						border: "none",
						height: "80%",
						borderRadius: "5%",
						padding: "5px 12px",
						fontWeight: "bold",
					}}
				>
					Try now
				</button>
			</div>
			<div
				className="navLink navSep"
				style={{ padding: "4px", paddingTop: 0, paddingLeft: "2px" }}
			>
				|
			</div>

			<div className="navLink" style={{ padding: "4px" }}>
				<img src={ProdButton} style={{ width: "112px", height: "32px" }} />
			</div>
		</div>
	);
}

export default Navbar;
