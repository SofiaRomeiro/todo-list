import React from "react";
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

const useStyles = makeStyles(() => ({
  margin: {
    margin: "3px"
  }
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [priority, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box display="flex">
      <FormControl className={classes.margin} style={{ marginright: "5px" }}>
        <InputLabel htmlFor="demo-customized-textbox">Descrição</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>

      <FormControl className={classes.margin} style={{ marginright: "5px" }}>
        <InputLabel id="demo-customized-select-label">Prioridade</InputLabel>
        <Select
          style={{ width: "100px" }}
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={priority}
          onChange={handleChange}
          input={<BootstrapInput />}
          InputLabelProps={{
            shrink: true
          }}
        >
          <MenuItem value="">
            <em> ---- </em>
          </MenuItem>
          <MenuItem value={1}>Baixa</MenuItem>
          <MenuItem value={2}>Media</MenuItem>
          <MenuItem value={3}>Alta</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.container} noValidate>
        <TextField
          style={{ marginTop: "10px", marginLeft: "5px" }}
          id="time"
          label="Horas"
          type="time"
          defaultValue="09:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </FormControl>
    </Box>
  );
}
