import React,{useState} from 'react'
//mui component
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
import real from '../Components/img/house.jpg'
//Assets
// import Header from './Header';

const useStyles = makeStyles({
    leftNav: {
        marginRight :"auto",
    },
    rightNav:{
        marginLeft :"auto",
    },
    propertyBtn:{
        backgroundColor:"green",
        color:"white",
        width:"15rem",
        fontSize:"1.1rem",
        marginLeft:"1rem",
    },
    loginBtn:{
        backgroundColor:"white",
        color:"white",
        // width:"15rem",
        // fontSize:"1.1rem",
        // marginRight:"1rem",
    },
    realImage:{
        width:"100%",
        height:"95vh"
    },
    overlatText:{
        position:"absolute",
        zIndex:"100",
        top:"100px",
        left:"20px",

    },
    homeBtn:{
        fontSize:'3.5em',
        borderRadius:"15px",
        backgroundColor:"green",
    }
  


  });
function Home() {
    const classes = useStyles();
  return (
    <>
   
      {/* <AppBar position="static" style={{backgroundColor:'black'}} >
        <Toolbar>
        <div className={classes.leftNav}>
          <Button color="inherit"><Typography variant='h4'>UMAR</Typography> </Button>
        </div>
        <div>
          <Button color="inherit"  style={{marginRight:"1rem",}}> <Typography variant='h6'>Listing</Typography></Button>
          <Button color="inherit"  style={{marginLeft:"1rem",}}> <Typography variant='h6'>Agencies</Typography></Button>
        </div>
        <div className={classes.rightNav}>
          <Button color="inherit"  style={{backgroundColor:'white',color:'black',marginRight:"1rem",}}>Add Property</Button>
          <Button color="inherit"  style={{backgroundColor:'green',marginLeft:"1rem"}} >Login</Button>
        </div>
          
        </Toolbar>
      </AppBar> */}
      {/* <Header/> */}
      <div style={{position:"relative"}}>
        <img src={real} className={classes.realImage}/>
        <div className={classes.overlatText}>
            <Typography variant='h1' style={{fontWeight:'bolder'}} >
                FIND YOUR <span style={{color:'green'}}>NEXT PROPERTY</span>  ON UMAR WEBSITE
            </Typography>
            <Button variant='contained' style={{ fontSize:'3.5em',borderRadius:"15px",backgroundColor:"green",marginTop:'2rem',boxShadow:'3px 3px 3px white'}}>See All Property</Button>
        </div>
      </div>
 
    </>

  )
}

export default Home