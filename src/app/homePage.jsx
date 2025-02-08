"use client";
import React, { useEffect, useState } from 'react';
import {  Grid, Paper } from '@mui/material';

import dynamic from 'next/dynamic';
let SignupPage  = dynamic( ()=> import ( "./Auth/signUp")  , {ssr : false} )
let SignInPage  = dynamic( ()=> import ( "./Auth/signIn")  , {ssr : false} )



const HomePage = () => {

  const [open , setOpen] = useState("signIn")

  const imageArray = ["books.png","books2.png","books3.png","books4.png","books5.png","books6.png","books7.png"]
  const [ind , setInd] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setInd((prevInd) => (prevInd + 1) % imageArray.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);



  return (
    <Grid container component="main"  sx={{ height: '100vh' ,  backgroundColor: "#1976D2",  }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: "url('/myImages/books.png')",
          backgroundImage: `url('/myImages/${imageArray[ind]}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '60%',
          backgroundColor: "#1976D2", 
          backgroundPosition: 'center',
        }}
      />
      <Grid item alignSelf={"center"} xs={12} sm={7} md={4} borderRadius={"20px"}  component={Paper} elevation={6} square>
     
     {open === "signIn" ?   <SignInPage setOpen = {setOpen}/> : <SignupPage  setOpen = {setOpen} />     }
       
     
      </Grid>
      <Grid
        item
        xs={false}
        sm={1}
        md={1}
        sx={{
          backgroundColor: "#1976D2", 
        }}
      />
    </Grid>
  );
};

export default HomePage;
