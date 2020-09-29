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
      marginLeft:55,
        marginTop:100,
      padding: theme.spacing(1),
      textAlign: 'left',
      color: "white",
      height:400,
      backgroundColor:"transparent",
      flexDirection: 'row'
    },
  }));
  


  

export default function HondaCivic (){
    const classes = useStyles();

  
        return(
            <div className="hondaCivic">
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
                        <Button  variant="contained"  href="/Profile"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Profile</Button>
                        </Grid>
                        <Grid item xs={1} >
                        <Button  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
   
          

        
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
          <Button  variant="contained"
        color="primary"style={{backgroundColor:"tomato",color:"black"}}>book now</Button>
        {" "}
          <Button  variant="contained"
        color="primary" href="/Rent" style={{backgroundColor:"gold",color:"black"}}>Back</Button>
          
          
          
          </Paper>
    </div>
            {/* <Footer/> */}
            </div> 
              
        )   
    }
