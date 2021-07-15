import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

const Task = ({ task, onDelete, index }) => {
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
              <Checkbox key={index} onClick={() => onDelete(task.id)} />
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

export default Task;
