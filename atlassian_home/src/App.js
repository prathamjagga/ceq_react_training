import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"

function App() {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page1" element={<Page1 />} />
				<Route path="/page2" element={<Page2 />} />
			</Routes>
		</div>
	);
}

export default App;
