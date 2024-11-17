import {useEffect, useState} from "react";

const ExampleList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    if (tasks) {
      setTasks(tasks)
    }
  }, [])

  useEffect(() =>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handlerSubmint = (e) => {
    e.preventDefault()
    setTasks([...tasks, task])
    setTask("")
  }
  return (<div>
    <h1>Example for list</h1>
    <form onSubmit={handlerSubmint}>
      <label htmlFor="task">Task Name:</label>
      <br/>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Enter your task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}/>
      <br/>
      <button type="submit">Add Task</button>
    </form>
    <div>
      <ul>
        {tasks.map((task, index) => (<li key={index}>{task}</li>))}
      </ul>
    </div>
  </div>)
}

export default ExampleList;
