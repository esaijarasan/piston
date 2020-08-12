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
  


  

export default function HondaVezel (){
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

          <img src="https://c4.wallpaperflare.com/wallpaper/640/966/464/2014-concept-honda-modulo-wallpaper-preview.jpg" height="350" width="350" ></img>
          <br/>
          <Button  variant="contained"
        color="primary">book now</Button>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h1> Honda Vezel car Details</h1>
          <ol>
              <li>
              Maximum power	131 - 172ps
              </li>

              <li>
              Fuel Consumption	17 - 21km/L
              </li>

              <li>
              Drive Type	AWD/FF
              </li>

              <li>
              Engine Capacity	1,496cc

              </li> 


              <li>
              length 4.295 - 4.34m 
              </li>

              <li>
              height 1.605 - 1.605m 
              </li>

              <li>
              width 1.79 - 1.79m
              </li>

              <li>
              Power (kW) 96 – 119 kW
              </li>

              <li>
              Type of Electric Car Hybrid 
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
