"use-client"

import React, {  useRef, useState } from 'react';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {app} from "../firebase"

const auth = getAuth(app)
const SignupPage = ( { setOpen}) => {

  const myRef = useRef();
  const [data, setData] = useState({
    email: "",
    password: "",
    emailError: false,
    emailHelperText: " ",
    passError: false,
    passHelperText: " "
  })

  const handleSignup = (event) => {
    event.preventDefault();
    if (data.email === "" ) {
      setData((old) => ({ ...old, emailError: true , emailHelperText  :'Please enter a email address' }))
    }
    else if ( data.password === "") {
      setData((old) => ({ ...old, passError: true , passHelperText  :'Please enter a password' }))
    }
    
    else if (data.emailError ||  data.passError) {
      document.title = "Error";
      alert("Please fix the errors before submitting")
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
      setData({})
      setOpen("signIn")
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
  ;
  const handleChange = (e) => {
      if (e.target.name === "email") {
        setData((old) => ({ ...old, email: e.target.value }))
        if (!emailRegex.test(e.target.value)) {
          setData((old) => ({ ...old, emailError: true , emailHelperText  :'Please enter a valid email address' }))
        } else {
          setData((old) => ({ ...old, emailError: false , emailHelperText  :' ' }))
        }
      } else if (e.target.name === "password") {
        setData((old) => ({ ...old, password: e.target.value }))
        if (!passRegex.test(e.target.value)) {
          setData((old) => ({ ...old, passError: true , passHelperText  :'Please enter a valid password' }))
        } else {
          setData((old) => ({ ...old, passError: false , passHelperText  :' ' }))
        }}
  }


  return (
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <Typography component="h1"fontWeight={700} variant="h5">
            Sign Up
          </Typography>
          <Box component="form"  noValidate onSubmit={handleSignup} sx={{ mt: 1 }}>
           
            <TextField
              onChange={handleChange}
              value={data.email}
              inputRef={myRef}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={data.emailHelperText}
              error={data.emailError}
            />
            <TextField
              onChange={handleChange}
              value ={data.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={data.passHelperText}
              error={data.passError}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{fontWeight:600, mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
  );
};

export default SignupPage;
