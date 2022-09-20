import React from 'react';
import {Link,useNavigate} from "react-router-dom"
// mui library

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    leftNav: {
        marginRight :"auto",
    },
    rightNav:{
        marginLeft :"auto",
    },
  });

function Header() {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
    <>
        <AppBar position="static" style={{backgroundColor:'black'}} >
    <Toolbar>
    <div className={classes.leftNav}>
      <Button color="inherit" onClick={() => navigate("/")}><Typography variant='h4'>UMAR</Typography> </Button>
    </div>
    <div>
      <Button color="inherit" onClick={() => navigate("/listing")} style={{marginRight:"1rem",}}> <Typography variant='h6'>Listing</Typography></Button>
      <Button color="inherit" onClick={() => navigate("/agency")} style={{marginLeft:"1rem",}}> <Typography variant='h6'>Agencies</Typography></Button>
    </div>
    <div className={classes.rightNav}>
      <Button color="inherit"  onClick={() => navigate("/")} style={{backgroundColor:'white',color:'black',marginRight:"1rem",}}>Add Property</Button>
      <Button color="inherit" onClick={() => navigate("/login")}  style={{backgroundColor:'green',marginLeft:"1rem"}} >Login</Button>
    </div>
      
    </Toolbar>
  </AppBar>
    
    </>

  )
}

export default Header