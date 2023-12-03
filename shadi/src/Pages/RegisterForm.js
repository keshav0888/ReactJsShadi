// RegisterForm.jsx
import React from "react";
import { InputBox } from "../Components/InputBox";
import Grid from "@mui/material/Grid";

export const RegisterForm = () => {
  return (
    <div className="RegisterForm">
      <div className="RegisterForm-Div">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1} direction="row">
                <Grid item xs={1.7}>
                  <label>Full Name :</label>
                </Grid>
                <Grid item xs={4}>
                  <InputBox type="text" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} direction="row">
                <Grid item xs={1.7}> 
                  <label>Mobile No :</label>
                </Grid>
                <Grid item xs={5}>
                  <InputBox type="text" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} direction="row">
                <Grid item xs={1.7}>
                  <label>Email Id :</label>
                </Grid>
                <Grid item xs={5}>
                  <InputBox type="text" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} direction="row">
                <Grid item xs={1.7}>
                  <label>Password :</label>
                </Grid>
                <Grid item xs={5}>
                  {" "}
                  <InputBox type="text" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <label>Confirm Password :</label>
                </Grid>
                <Grid item xs={4}>
                  <InputBox type="text" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </form> 
        </div>
      </div>
  );
};
