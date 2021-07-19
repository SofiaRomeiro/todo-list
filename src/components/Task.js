import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

const Task = ({ task, onDelete, index, setTask, tasksList }) => {


    return (
        <Grid>
            <Grid item xs={12} md={6}>
                <div>
                    <List>
                        <ListItem>
                            <ListItemText
                                key={task.id}
                                primary={task.description}
                                secondary={task.time + "  (" + task.priority + ")"}
                            />
                            <Checkbox
                                checked={task.isDone}
                                key={index}
                                onClick={() => {
                                    setTask(index, tasksList);
                                    onDelete(task, task.id);                               
                                    }
                                }
                            />
                        </ListItem>
                    </List>
                </div>
            </Grid>
        </Grid>
    );
};

export default Task;
