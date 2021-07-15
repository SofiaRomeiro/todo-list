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
  const [showNewTaskForm, setShowNewTaskForm] = useState(true);
  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      description: "Levar o gato a passear",
      time: "9:00",
      priority: "media"
    },
    {
      id: 2,
      description: "inscrever no exame de karate",
      time: "20:00",
      priority: "alta"
    },
    {
      id: 3,
      description: "jogar valorant",
      time: "23:00",
      priority: "baixa"
    },
    {
      id: 4,
      description: "comprar bilhete para Leiria",
      time: "15:00",
      priority: "alta"
    }
  ]);

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <Header />

        <Tasks tasks={tasksList} onDelete={deleteTask} />

        <Divider
          variant="middle"
          style={{ marginBottom: "15px", marginTop: "10px" }}
        />

        <Button
          onAdd={() => setShowNewTaskForm(!showNewTaskForm)}
          AddOrSave={showNewTaskForm}
        />

        {showNewTaskForm && <NewTask />}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
