import React from "react";
import { InputBox } from "./InputBox";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";

export const RegisterForm = () => {
  return (
    <div className="RegisterForm">
      <div className="RegisterForm-Div">
        <Formik
          initialValues={{
            name: "",
            mobile_no: "",
            email_id: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit} className="Form">
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={3} md={1.5}>
                      <label>Full Name :</label>
                    </Grid>
                    <Grid item xs={12} sm={9} md={3}>
                      <InputBox type="text" name="name" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={3} md={1.5}>
                      <label>Mobile No :</label>
                    </Grid>
                    <Grid item xs={12} sm={9} md={3}>
                      <InputBox type="number" name="mobile_no" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={3} md={1.5}>
                      <label>Email Id :</label>
                    </Grid>
                    <Grid item xs={12} sm={9} md={3}>
                      <InputBox type="email" name="email_id" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={3} md={1.5}>
                      <label>Password :</label>
                    </Grid>
                    <Grid item xs={12} sm={9} md={3}>
                      <InputBox type="text" name="password" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={3} md={1.6}>
                      <label>Confirm Password :</label>
                    </Grid>
                    <Grid item xs={12} sm={9} md={3}>
                      <InputBox type="text" name="confirm_password" onChange={handleChange} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <button type="submit" className="SubmitBtn">
                        Submit
                      </button>
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
