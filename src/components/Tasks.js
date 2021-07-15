import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const DisplayTasks = () => {
  const tasks = ["task1", "task2", "task3", "task4", "task5"];
  const time = "9:00";
  const priority = "medium";
  return (
    <>
      {tasks.map((task) => (
        <Grid>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                <ListItem>
                  <ListItemText primary={task} secondary={time} />
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
