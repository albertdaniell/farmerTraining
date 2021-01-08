import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import SelectAppInput from "../SelectAppInput/SelectAppInput";
import SubCountySelect from "../SubCountySelect/SubCountySelect";
import "./ProfileForm.css";
function ProfileForm() {
  const counties = ["Nairobi", "Mombasa", "Busia"];
  const [countySel, setCountySel] = useState("");
  const handleChange = (event) => {
    setCountySel(event.target.value);
  };
  return (
    <div className="myForm">
      <form>
        <FormControl id="form-control" fullWidth>
          <label class="">Name</label>
          <TextField size="small" id="profile-text-field" fullWidth variant="outlined" />
        </FormControl>

        <FormControl id="form-control" fullWidth>
          <label>Phone</label>
          <TextField size="small" id="profile-text-field" fullWidth variant="outlined" />
        </FormControl>

        <FormControl id="form-control" fullWidth>
          <SelectAppInput
            valueToUpdate={countySel}
            label="County"
            handleChange={handleChange}
            values={counties}
          ></SelectAppInput>
        </FormControl>

        <FormControl id="form-control" fullWidth>
          <SubCountySelect
            valueToUpdate={countySel}
            label="Sub-County"
            handleChange={handleChange}
            values={counties}
          ></SubCountySelect>
        </FormControl>

        <FormControl id="form-control" fullWidth>
          <Button  disableElevation id="secondary-button" size="large" fullWidth variant="contained" color="primary">
            Update
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default ProfileForm;
