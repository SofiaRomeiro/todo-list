import React from "react";
import { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: "15px"
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const addTaskForm = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmit = (t) => {
    t.preventDefault();

    onAdd({ description, time, priority });

    setDescription("");
    setTime("");
    setPriority("");
  };

  return (
    //descricao | prioridade | horas
    <Box display="flex" style={{ marginTop: "5px" }}>
      <form onSubmit={onSubmit}>
        <div className="FormControl" style={{ marginRight: "10px" }}>
          <InputLabel htmlFor="demo-customized-textbox">Descrição</InputLabel>
          <BootstrapInput
            style={{ width: "300px" }}
            id="demo-customized-textbox"
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
              Prioridade
            </InputLabel>
            <Select
              style={{ width: "100px" }}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              input={<BootstrapInput />}
              value={priority}
              onChange={(t) => setPriority(t.target.value)}
            >
              <MenuItem value="">
                <em> ---- </em>
              </MenuItem>
              <MenuItem value={"baixa"}>Baixa</MenuItem>
              <MenuItem value={"media"}>Media</MenuItem>
              <MenuItem value={"alta"}>Alta</MenuItem>
            </Select>
          </div>

          <div className="FormControl">
            <TextField
              style={{ marginTop: "22px", marginLeft: "5px" }}
              id="time"
              label="Horas"
              type="time"
              defaultValue="09:00"
              value={time}
              onChange={(t) => setTime(t.target.value)}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
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

export default addTaskForm;
