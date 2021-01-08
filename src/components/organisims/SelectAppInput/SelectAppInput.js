import React from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./SelectAppInput.css";

function SelectAppInput(props) {
  const { values } = props;
  const { handleChange } = props;
  const { label } = props;
  const { valueToUpdate } = props;

  return (
    <>
      <label>{label}</label>
      <FormControl variant="outlined" id="form-control-select" fullWidth>
        <Select
        
          labelId="demo-simple-select-outlined-label"
          id="select-outlined"
          value={valueToUpdate}
          onChange={handleChange}
          label="County"
        >
          {values.map((value, index) => {
            return (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectAppInput;
