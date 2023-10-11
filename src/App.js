import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const initialStatuses = JSON.parse(localStorage.getItem("statuses")) || [];
	const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

	const [statuses, setStatuses] = useState(initialStatuses);
	const [tasks, setTasks] = useState(initialTasks);

	const [inp, setInp] = useState("");

	useEffect(() => {
		saveTasks();
	}, [tasks, statuses]);

	function saveTasks() {
		localStorage.setItem("tasks", JSON.stringify(tasks));
		localStorage.setItem("statuses", JSON.stringify(statuses));
	}

	return (
		<div className="app-wrapper">
			<div className="App">
				<input
					className="task-input"
					placeholder="Enter new task name"
					value={inp}
					onChange={(e) => setInp(e.target.value)}
				/>
				<button
					className="add-task-button"
					onClick={() => {
						setTasks([...tasks, inp]);
						setStatuses([...statuses, "Open"]);
						setInp("");
					}}
				>
					Add Task
				</button>
				<div className="task-list">
					<h3 className="tasks-heading">All Tasks</h3>
					{tasks.map((task, index) => {
						return (
							<div className="task-container" key={index}>
								<h4 className="task-title">{task}</h4>
								<div>
									<button
										className="remove-task-button"
										onClick={() => {
											setTasks(tasks.filter((t) => t !== task));
											setStatuses(statuses.filter((s, i) => i !== index));
										}}
									>
										Remove
									</button>
									<button
										className="edit-task-button"
										onClick={() => {
											var newVal = prompt("Update TODO", task);
											if (newVal)
												setTasks(tasks.map((t) => (t === task ? newVal : t)));
										}}
									>
										Edit
									</button>
								</div>
								<label className="status-label">Task Status</label>

								<select
									className="status-select"
									name="task-status"
									onChange={(e) => {
										console.log(e.target.value);
										setStatuses(
											statuses.map((s, i) => (i === index ? e.target.value : s))
										);
									}}
									value={statuses[index]}
								>
									<option value="Open">Open</option>
									<option value="In Progress">In Progress</option>
									<option value="Done">Done</option>
								</select>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
