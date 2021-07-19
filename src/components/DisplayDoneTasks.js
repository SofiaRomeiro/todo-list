import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const DisplayDoneTasks = ({ tasksDone, undoDone }) => {

    return (
        <>
        { tasksDone.length > 0 && tasksDone.map((task, index) => (
            <List style={{color:"grey"}}>
				 <ListItem>
					<ListItemText
						key={index}
						primary={task.description}
						secondary={task.time + "  (" + task.priority + ")"}
					/>

					<Checkbox
						checked={task.isDone}
						style={{color:"lightgrey"}}
						key={task.id}	
						onClick={() => undoDone(task, task.id)}				
					/>
				 </ListItem>
			 </List>
            ))}
        </>
    );
};

export default DisplayDoneTasks;


