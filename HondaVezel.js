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
      marginLeft:955,
      marginTop:55,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: "black",
    height:400,
    backgroundColor:"transparent",
    flexDirection: 'row'
    },
  }));
  


  

export default function HondaVezel (){
    const classes = useStyles();

  
        return(
            <div className="hondavezel">
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
          <Button  variant="contained"
        color="primary" style={{backgroundColor:"tomato",color:"black"}}>book now</Button>
        {" "}
          <Button  variant="contained"
        color="primary" href="/Rent" style={{backgroundColor:"gold",color:"black"}}>Back</Button>
          
          
          </Paper>
        
        
     
    </div>
            {/* <Footer/> */}
            </div> 
              
        )   
    }
