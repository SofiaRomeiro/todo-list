import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

const DisplayTasks = ({tasks, onDelete}) => {
  
  return (
    <>
      {tasks.map((task) => (
        <Grid>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                <ListItem>
                  <ListItemText primary={task.description} secondary={task.time + "  (" + task.priority +")"} />
                  <Checkbox onClick={() => onDelete(task.id)}/>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default DisplayTasks;
