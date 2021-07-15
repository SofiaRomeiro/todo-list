import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Task from "./Task.js";

const DisplayTasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default DisplayTasks;
