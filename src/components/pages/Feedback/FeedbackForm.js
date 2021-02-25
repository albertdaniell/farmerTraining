import React from "react";

function FeedbackForm() {
  return (
    <div>
    

      <FormControl id="form-control" fullWidth>
        <label>Feedback Message</label>
        <TextField
        style={{height:100}}
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
    </div>
  );
}

export default FeedbackForm;
