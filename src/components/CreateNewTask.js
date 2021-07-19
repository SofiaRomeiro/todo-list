import React from "react";
import { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const AddTaskForm = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmit = (t) => {
    t.preventDefault();

    onAdd({ description, time, priority, isDone: false });

    setDescription("");
    setTime("");
    setPriority("");
  };

  return (
    //descricao | prioridade | horas
    <Box display="flex" style={{ marginTop: "5px" }}>
      <form onSubmit={onSubmit}>
        <div className="FormControl" style={{ marginRight: "10px" }}>
          <InputLabel htmlFor="demo-customized-textbox">Description</InputLabel>
          <textarea
            style={{ width: "400px", borderRadius:"2px", height:"40px", borderColor:"lightgrey", padding:"10px" }}
            value={description}
            onChange={(t) => setDescription(t.target.value)}
          />
        </div>

        <Box display="flex">
          <div
            className="FormControl"
            style={{ marginRight: "10px", marginTop: "3px" }}
          >
            <InputLabel id="demo-customized-select-label">
              Priority
            </InputLabel>
            <Select
              style={{ width: "100px", height:"50px" }}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={priority}
              onChange={(t) => setPriority(t.target.value)}
            >
              <MenuItem value={"baixa"}>Low</MenuItem>
              <MenuItem value={"media"}>Medium</MenuItem>
              <MenuItem value={"alta"}>High</MenuItem>
            </Select>
          </div>        

          <>
            <div className="FormControl">
              <TextField
                style={{ marginTop: "22px", marginLeft: "5px"  }}
                id="time"
                label="Hours"
                type="time"
                value={time}
                onChange={(t) => setTime(t.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          </>

        </Box>

        <input
          type="submit"
          style={{ marginTop: "15px", width: "110px" }}
          value="Save"
          className="btn btn-block"
        />
      </form>
    </Box>
  );
};

export default AddTaskForm;
