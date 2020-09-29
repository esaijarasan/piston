import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, IconButton, Grid, Paper, Card, CardContent} from '@material-ui/core'
import { blue, cyan, red } from '@material-ui/core/colors';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';



const style = {

  
    
  }
  const mystyle = {
    fontFamily: "Arial",
    backgroundColor:"transparent",
    color:"black"
    };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginLeft:55,
      marginTop:10,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: "BLACK",
    height:480,
    backgroundColor:"transparent",
    flexDirection: 'row'
    },
    
    
     }));
  
   


  

export default function Dio (){
    const classes = useStyles();

  
        return(
            <div className="dio">
            <div>
            <AppBar position="static" style={mystyle}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" >
                            <img src="https://www.pngitem.com/pimgs/m/120-1201491_download-blank-logo-for-picsart-blank-logo-for.png" style={{width:"80px",height:"70px"}} ></img>
                        </Typography>
                        
                        <Grid item xs={9}>
                        <Button href="/Home"  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>HOME</Button>

                        </Grid>

                        <Grid item xs={2}>
                        <Button  variant="contained"  href="/Profile" style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Profile</Button>
                        </Grid>
                        <Grid item xs={1} >
                        <Button  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.root}>
   
          
     
          <Paper className={classes.paper}>
          <h1> <b>Royal Enfield Bike details</b></h1>
          <ol>
              <li>
                <b> Engine CC	:109.2 cc</b>
              </li>

              <li>
              <b> Max Power:	8.00 bhp</b>
              </li>

              <li>
              <b>  Max Torque	:9.00 Nm</b>
              </li>

              <li>
              <b> Starting Mechanism:	Self / Kick Start</b>

              </li> 


              <li>
              <b> Transmission	:Automatic</b>

              </li>

              <li>
              <b>Fuel Tank Capacity: 5.3 L</b>
              </li>

              <li>
              <b> Reserve Fuel Capacity: 1 L</b>
              </li>

              <li>
              <b> Mileage: 55 Kmpl</b>
              </li>

              <li>
              <b>Battery: 12V 3Ah (MF)</b>
              </li>


          </ol>
          <Button  variant="contained"
        color="primary"  style={{backgroundColor:"Tomato", color:"black"}}>book now</Button>
{" "}
          <Button  variant="contained"
        color="primary" href="/Rent" style={{backgroundColor:"gold", color:"black"}}>Back</Button>
          
        
          
          
          </Paper>
       
    </div>
            {/* <Footer/> */}
            </div> 
              
        )   
    }
