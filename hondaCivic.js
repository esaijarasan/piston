import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, IconButton, Grid, Paper, Card, CardContent} from '@material-ui/core'
import { blue, cyan, red } from '@material-ui/core/colors';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';



const style = {

    card : {
        backgroundColor:"white",
        height:400,
        width:250,
        marginTop:50,
        marginLeft:100,},
   
    line: {
        height:10,
        backgroundColor:"black",
        width:3,
        marginLeft:240
    },
    buttonl: {
        height:100,
        width:150,
        backgroundColor:"lightgreen"
    },
    buttonl: {
        height:100,
        width:150,
        backgroundColor:"lightgreen"
    },
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        marginTop:50,
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      height:400
    },
  }));
  


  

export default function HondaCivic (){
    const classes = useStyles();

  
        return(
            <div>
            <div>
                <AppBar position="static" style={{backgroundColor:"black"}}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" style={{backgroundColor:"royalblue", color:"black",}}>
                            Piston
                        </Typography>
                        
                        <Grid item xs={10}>
                        <Button color="inherit">HOME</Button>

                        </Grid>

                        <Grid item xs={1}>
                        <Button color="inherit">Profile</Button>
                        </Grid>
                        <Grid item xs={1}>
                        <Button color="inherit">Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>

          <img src="https://www.wsupercars.com/wallpapers/Honda/2020-Honda-Civic-Si-004-1080.jpg" height="350" width="350" ></img>
          <br/>
          <Button  variant="contained"
        color="primary">book now</Button>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h1> Honda Civic car Details</h1>
          <ol>
              <li>
              Engine Displacement (cc):	1597
              </li>

              <li>
              Max Torque (nm@rpm):	300Nm@2000rpm
              </li>

              <li>
              Seating Capacity:	5
              </li>

              <li>
              Boot Space (Litres):	430

              </li> 


              <li>
              Body Type:	Sedan

              </li>

              <li>
              Fuel Type:	Diesel
              </li>

              <li>
              Max Power: (bhp@rpm)	118bhp@4000rpm
              </li>

              <li>
              TransmissionType:	Manual
              </li>

              <li>
              Fuel Tank Capacity:	47l
              </li>


          </ol>
          
          
          
          </Paper>
        </Grid>
        
      </Grid>
    </div>
            <Footer/>
            </div> 
              
        )   
    }
