import "./App.css";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import {useState} from "react";
import {nanoid} from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name){
    const newTask = {id:"task-"+nanoid(),name:name, completed: false};
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id){
    const updatedTask = tasks.map((task)=>{
      if(id === task.id ){
        return{...task, completed : !tasks.completed}
      }
      return {task}
    })
   setTasks(updatedTask);

  }

  function deleteTask(id){
    const remainingTask = tasks.filter((task)=>id!== task.id);
    setTasks(remainingTask);
  }
  const taskList = tasks.map((task) => (
    <ToDo
      id={task.id}
      completed={task.completed}
      name={task.name}
      key={task.id}
      toggleTaskCompleted = {toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${taskNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask ={addTask}/>

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
export default App;
