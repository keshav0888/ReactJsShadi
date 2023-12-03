// RegisterForm.jsx
import React from "react";
import { InputBox } from "../Components/InputBox";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
export const RegisterForm = () => {
  return (
    <div className="RegisterForm">
      <div className="RegisterForm-Div">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>Full Name:</label>
              <InputBox type="text" />
            </Grid>
            <Grid item xs={12}>
              <label>Mobile No:</label>
              <InputBox type="text" />
            </Grid>
            <Grid item xs={12}>
              <label>Email Id:</label>
              <InputBox type="text" />
            </Grid>
            <Grid item xs={12}>
              <label>Password:</label>
              <InputBox type="text" />
            </Grid>
            <Grid item xs={12}>
              <label>Confirm Password:</label>
              <InputBox type="text" />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};
{
  /* <form>
<div>
  <label>Full Name:</label>
  <InputBox type="text" />
</div>{" "}
<div>
  <label>Mobile No:</label>
  <InputBox type="text" />
</div>{" "}
<div>
  <label>Email Id:</label>
  <InputBox type="text" />
</div><div>
  <label>Password:</label>
  <InputBox type="text" />
</div><div>
  <label>Confirm Password:</label>
  <InputBox type="text" />
</div>
</form> */
}
