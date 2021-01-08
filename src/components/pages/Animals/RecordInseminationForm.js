import { FormControl } from "@material-ui/core";
import React, { useState } from "react";
import AppDatePicker from "../../organisims/AppDatePicker/AppDatePicker";
import SelectAppInput from "../../organisims/SelectAppInput/SelectAppInput";

function RecordInseminationForm() {
    const counties = ["Animal 1", "Animal 2", "Animal 3"];
  const [countySel, setCountySel] = useState("");
  const handleChange = (event) => {
    setCountySel(event.target.value);
  };
  return (
    <div>
      <FormControl id="form-control" fullWidth>
        <SelectAppInput
          valueToUpdate={countySel}
          label="Select Animal"
          handleChange={handleChange}
          values={counties}
        ></SelectAppInput>
      </FormControl>

      <FormControl id="datePicker" fullWidth>
        <AppDatePicker label="Insemination Date"></AppDatePicker>
      </FormControl>
    </div>
  );
}

export default RecordInseminationForm;
