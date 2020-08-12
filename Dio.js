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
  


  

export default function Dio (){
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

          <img src="https://cdn.autoportal.com/bp-v3/img/models/5/1/dio-black.png" height="350" width="350" ></img>
          <br/>
          <Button  variant="contained"
        color="primary">book now</Button>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h1> Dio Bike details</h1>
          <ol>
              <li>
                 Engine CC	:109.2 cc
              </li>

              <li>
                   Max Power:	8.00 bhp
              </li>

              <li>
                   Max Torque	:9.00 Nm
              </li>

              <li>
                 Starting Mechanism:	Self / Kick Start

              </li> 


              <li>
                 Transmission	:Automatic

              </li>

              <li>
                  Fuel Tank Capacity: 5.3 L
              </li>

              <li>
                   Reserve Fuel Capacity: 1 L
              </li>

              <li>
                  Mileage: 55 Kmpl
              </li>

              <li>
                  Battery: 12V 3Ah (MF)
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
