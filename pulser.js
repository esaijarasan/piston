import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, IconButton, Grid, Paper, Card, CardContent} from '@material-ui/core'
import { blue, cyan, red } from '@material-ui/core/colors';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';



const style = {

  Pulser:{
    marginLeft:130,
    width:250,
    height:400,
  //   backgroundImage:
  // 'linear-gradient( 166deg, rgb(101,203,240) 50%, rgb(101,203,240) 50%, rgb(101,203,240) 50%)',
  // backgroundColor:"transparent",
      
      // color:"white",
      borderRadius:50,
  }
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
        marginTop:5,
      padding: theme.spacing(1),
      textAlign: 'left',
      color: "black",
      height:400,
      backgroundColor:"transparent",
      flexDirection: 'row'
    },
  
  }));
  


  

export default function Pulser (){
    const classes = useStyles();

  
        return(
            <div className="pulser">
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
            </div>
            <div className={classes.root}>
     
        
        <Paper className={classes.paper}>
          <h1> Ktm Duke Bike details</h1>
          <ol>
              <li>
              Engine Type:	4-Stroke, 2-Valve, Twin Spark BSVI Compliant DTS-i FI Engine
              </li>

              <li>
                   Max Power:	14 PS @ 8500 rpm
              </li>

              <li>
              Displacement:	149.5 cc
              </li>

              <li>
                 Starting Mechanism:	Self / Kick Start

              </li> 


              <li>
                 Transmission	:Automatic

              </li>

              <li>
                  Fuel Tank Capacity: 15 L
              </li>

              <li>
              Body Type	Commuter Bikes
              </li>

              <li>
              Brakes:	Disc
              </li>

              <li>
              Odometer	Digital
              </li>
              

          </ol>

          <Button  variant="contained"
        color="primary" style={{backgroundColor:"Tomato",color:"blue"}}>book now</Button>
        {"   "}

          <Button  variant="contained"
        color="primary" href="/Rent" style={{backgroundColor:"gold" ,color:"blue"}}>Back</Button>

          
          
          
          </Paper>




        
    </div>
            {/* <Footer/> */}
            </div> 
              
        )   
    }
