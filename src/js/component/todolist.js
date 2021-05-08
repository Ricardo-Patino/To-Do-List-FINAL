import React, { useState } from "react";

//create your first component
export function ToDoList() {
	const [tarea, setTarea] = useState("");
	let [tareas, setTareas] = useState([]);

	const validateTask = () => {
		if (tarea === "")
			alert("Debe ingresar algún valor para agregar la tarea");
		else {
			setTareas([
				...tareas,
				{
					id: tareas.length,
					value: tarea
				}
			]);
			alert("Task added correctly");
			setTarea("");
		}
	};

	const removerTarea = index => {
		//alert(index);
		let newList = tareas;
		newList.splice(index, 1);
		console.log(newList);
		setTareas([...newList]);
	};

	return (
		<div className=" container text-center mt-5 d-flex justify-content-center">
			<div className="card col-5">
				<h5 className="card-title">To Do List</h5>
				<div className="input-group mb-4 col-14">
					<input
						type="text"
						className="form-control"
						placeholder="Add what to do next"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
						onChange={e => setTarea(e.target.value)}
						value={tarea}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-primary"
							type="button"
							id="button-addon2"
							onClick={validateTask}>
							Add
						</button>
					</div>
				</div>
				<div className="card-body text-left">
					{tareas.map((muestratarea, index) => (
						<li key={muestratarea.id} className="list-group-item ">
							{muestratarea.value}
							<input
								type="button"
								className="btn btn-danger btn-sm float-right"
								onClick={() => removerTarea(index)}
								value="Delete"
							/>
						</li>
					))}
				</div>
				<p className="card-text text-left ml-2">
					<small className="text-muted">
						{tareas.length} task left
					</small>
				</p>
			</div>
		</div>
	);
}
