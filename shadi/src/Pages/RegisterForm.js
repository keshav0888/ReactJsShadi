// RegisterForm.jsx
import React from "react";
import { InputBox } from "../Components/InputBox";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";

export const RegisterForm = () => {
  return (
    <div className="RegisterForm">
      <div className="RegisterForm-Div">
        <Formik
         initialValues={{
          name: '',
          mobile_no: '',
          email_id: '',
          password: '',
          confirm_password: '',
        }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit,handleChange }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={1.7}>
                      <label>Full Name :</label>
                    </Grid>
                    <Grid item xs={4}>
                      <InputBox type="text" name="name" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={1.7}>
                      <label>Mobile No :</label>
                    </Grid>
                    <Grid item xs={5}>
                      <InputBox type="number" name="mobile_no" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={1.7}>
                      <label>Email Id :</label>
                    </Grid>
                    <Grid item xs={5}>
                      <InputBox type="email" name="email_id" onChange={handleChange} />
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
                    <InputBox type="text" name="password" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row">
                    <Grid item>
                      <label>Confirm Password :</label>
                    </Grid>
                    <Grid item xs={4}>
                      <InputBox type="text" name="confirm_password" onChange={handleChange}/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={12}>
                      <button type="submit">Submit</button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
