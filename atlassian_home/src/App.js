import "./App.css";
import Button from "./components/Button";
import ClassCompWithState from "./components/ClassCompWithState";
import Employee from "./components/Employee";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
function App() {
	return (
		<div>
			{/* <Navbar />
			<Intro /> */}
			{/* <Button color="red" />
			<br/>
			<br />
			<Employee position="SDE" name="Pratham Jagga" location="Mohali" />
			<br />
			<Employee position="SDE2" name="Yuvraj Kumar Arora" location="Ohio" /> */}
			<ClassCompWithState />
		</div>
	);
}

export default App;
