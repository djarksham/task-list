import React, { useState } from "react";
import { isEmpty, size } from "lodash"
import shortid from "shortid";

function App() {
  const [task, setTask] = useState("");
  const [tareas, setTareas] = useState([]);

  const addTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("tarea esta vacia");
      return;
    }
    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTareas([...tareas, newTask])
    setTask("");
  }

  const deleteTask = (id) => {
    const filteredTasks = tareas.filter(task => task.id !== id)
    setTareas(filteredTasks)
  }

  return (
    <div className="container-lg">
      <h1>Tareas</h1>
      <hr></hr>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          {
            size(tareas) == 0 ? (
              <h5 className="text-center">No hay tareas, añadir tareas</h5>
            ) : (
              <ul className="list-group">
                {
                  tareas.map((task) => (
                    <li className="list-group-item" key={task.id}>
                      <span className="lead">{task.name}</span>
                      <button className="btn btn-danger btn-primary btn-sm float-end"
                        onClick={() => deleteTask(task.id)}>
                        Eliminar
                      </button>
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="ingrese la tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}>
            </input>
            <div class="d-grid gap-2">
              <button className="btn btn-dark btn-primary"
                type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
