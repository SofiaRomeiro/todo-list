import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Header from "./components/Header";
import LanguageSwitcher from "./LanguageSwitcher";
import TrashButton from "./components/TrashButton";
import DisplayDoneTasks from "./components/DisplayDoneTasks";
import NewTask from "./components/CreateNewTask";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

const App = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [tasksDone, setTasksDone] =useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasksList([...tasksList, newTask]);
  };

  const deleteTask = (task, id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
    setTasksDone([...tasksDone, task]);    
  };

  const undoDoneTask = (task, id) => {
    setTasksDone(tasksDone.filter((task) => task.id !== id));
    task.isDone = !task.isDone;
    setTasksList([...tasksList, task]);
  }

  const clearDoneTasks = () => {
    setTasksDone([]);
  }


  const handleCheckbox = (index, tasksList) => {
    const temp = [...tasksList];
    temp[index].isDone = !temp[index].isDone; 
    setTasksList(temp);
  }

  return (
    <Router>
      <div className="container">
        <Header />

        {tasksList.length > 0 ? (
          <Tasks tasks={tasksList} onDelete={deleteTask} setTask={handleCheckbox} />
        ) : (
          <p> No tasks to show :) </p>
        )}

        <Divider
          variant="middle"
          style={{ marginBottom: "15px", marginTop: "10px" }}
        /> 

        <div style={{ display: "flex", justifyContent: 'flex-end', marginRight:"18px", marginBottom:"0px"}} >

          { tasksDone.length > 0 && <TrashButton  clearDone={clearDoneTasks} />}

        </div>

        { tasksDone.length > 0 && <DisplayDoneTasks tasksDone={tasksDone} undoDone={undoDoneTask}/> }

        { tasksDone.length > 0 && <Divider
          variant="middle"
          style={{ marginBottom: "15px", marginTop: "10px" }}
        /> }

        <Button 
          onAdd={() => setShowNewTaskForm(!showNewTaskForm)}
          AddOrSave={showNewTaskForm}
        />
    

        {showNewTaskForm && <NewTask onAdd={addTask} />}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
