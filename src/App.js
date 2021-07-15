import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Header from "./components/Header";
import NewTask from "./components/CreateNewTask";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

const App = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(true);

  return (
    <Router>
      <div className="container">
        <Header />

        <Tasks />

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
