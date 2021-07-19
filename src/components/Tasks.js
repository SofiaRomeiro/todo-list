import React from "react";
import Task from "./Task.js";

const DisplayTasks = ({ tasks, onDelete, setTask }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} setTask={setTask} index={index} />
            ))}
        </>
    );
};

export default DisplayTasks;
