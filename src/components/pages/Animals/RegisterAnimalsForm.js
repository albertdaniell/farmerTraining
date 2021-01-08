import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AppDatePicker from "../../organisims/AppDatePicker/AppDatePicker";
import SelectAppInput from "../../organisims/SelectAppInput/SelectAppInput";

function RegisterAnimalsForm() {
  const counties = ["Nairobi", "Mombasa", "Busia"];
  const [countySel, setCountySel] = useState("");
  const handleChange = (event) => {
    setCountySel(event.target.value);
  };
  return (
    <div>
      <form>
        <FormControl id="form-control" fullWidth>
          <label class="">Name of animal</label>
          <TextField
            size="small"
            id="profile-text-field"
            fullWidth
            variant="outlined"
          />
        </FormControl>

        <FormControl id="form-control" fullWidth>
          <SelectAppInput
            valueToUpdate={countySel}
            label="Breed"
            handleChange={handleChange}
            values={counties}
          ></SelectAppInput>
        </FormControl>

        <FormControl id="datePicker" fullWidth>
          <AppDatePicker label="Date of birth"></AppDatePicker>
        </FormControl>
       
        <FormControl id="form-control" fullWidth>
          <Button
            disableElevation
            id="secondary-button"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default RegisterAnimalsForm;
