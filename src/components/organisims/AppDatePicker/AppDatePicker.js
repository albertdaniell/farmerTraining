import React from "react";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,DatePicker
} from "@material-ui/pickers";
import { RemoveStringsFromDate } from "../../../services/RemoveStringsFromDate/RemoveStringsFromDate";
function AppDatePicker(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // alert(RemoveStringsFromDate(date))
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <label>{props.label}</label>
      <DatePicker
      variant="outlined"
       fullWidth
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default AppDatePicker;
