import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { GeocoodinatesContext } from "../../../contexts/Geocoodinates/Geocoodinates";
import SubCountySelect from "../../organisims/SubCountySelect/SubCountySelect";

function RecordFarmDetailsForm() {
    const counties = ["Nairobi", "Mombasa", "Busia"];
  const [countySel, setCountySel] = useState("");
  const handleChange = (event) => {
    setCountySel(event.target.value);
  };

  const { lat, long,getCoordinates }=useContext(GeocoodinatesContext);
  return (
    <form>
      
      <FormControl id="form-control" fullWidth>
        <SubCountySelect
          valueToUpdate={countySel}
          label="County"
          handleChange={handleChange}
          values={counties}
        ></SubCountySelect>
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
        <SubCountySelect
          valueToUpdate={countySel}
          label="Constituency"
          handleChange={handleChange}
          values={counties}
        ></SubCountySelect>
      </FormControl>

      <FormControl id="form-control" fullWidth>
        <SubCountySelect
          valueToUpdate={countySel}
          label="Ward"
          handleChange={handleChange}
          values={counties}
        ></SubCountySelect>
      </FormControl>

      <FormControl id="form-control" fullWidth>
        <label>Village</label>
        <TextField
          size="small"
          id="profile-text-field"
          fullWidth
          variant="outlined"
        />
      </FormControl>

      <FormControl id="form-control" fullWidth>
        <label>Latitude</label>
        <TextField
        value={lat}
          size="small"
          id="profile-text-field"
          fullWidth
          variant="outlined"
        />
      </FormControl>

      <FormControl id="form-control" fullWidth>
        <label>Longitude</label>
        <TextField
        value={long}
          size="small"
          id="profile-text-field"
          fullWidth
          variant="outlined"
        />
      </FormControl>

      <FormControl id="form-control" fullWidth>
        <label>Acerage</label>
        <TextField
          size="small"
          id="profile-text-field"
          fullWidth
          variant="outlined"
        />
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
  );
}

export default RecordFarmDetailsForm;
