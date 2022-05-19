import "./App.css";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

const FILTER_MAPP = {
  All: () => true,
  Active: (task) => !task.completed,
  completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAPP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTask = { id: "task-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !tasks.completed };
      }
      return { task };
    });
    setTasks(updatedTask);
  }

  function deleteTask(id) {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTasks(remainingTask);
  }

  function editTask(id, newName) {
    const editTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editTaskList);
  }
  const taskList = tasks
    .filter(FILTER_MAPP[filter])
    .map((task) => (
      <ToDo
        id={task.id}
        completed={task.completed}
        name={task.name}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(()=>{
    if(tasks.length - prevTaskLength === -1){
      listHeadingRef.current.focus();
    }
  },[tasks.length, prevTaskLength]);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" ref={listHeadingRef}>
        {headingText}
      </h2>
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
