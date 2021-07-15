import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Header from "./components/Header";
import NewTask from "./components/CreateNewTask";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

const App = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [tasksList, setTasksList] = useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasksList([...tasksList, newTask]);
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <Header />

        {tasksList.length > 0 ? (
          <Tasks tasks={tasksList} onDelete={deleteTask} />
        ) : (
          <p> Sem tarefas por fazer :) </p>
        )}

        <Divider
          variant="middle"
          style={{ marginBottom: "15px", marginTop: "10px" }}
        />

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
