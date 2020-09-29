import React, { Component } from 'react';
import { Card, Grid, CardMedia } from '@material-ui/core';
import policepic from './policepic.jpg';
import ambulance from './ambulancepic.jpg';
import fire from './carfirepic.jpg'
import bg from './helpbgpic.jpg'
import {AppBar, Button, Typography,Toolbar, CardContent} from '@material-ui/core';

const style = {
    card1 : {
        backgroundColor:"transparent",
        height:450,
        color:"red",
        marginLeft:120,
        width:300,
        marginTop:150,
        border:"2px solid red",
        borderRadius:"30px",  
    }
}

export default class Sos extends Component{
    render(){
        return(
            <React.Fragment>

        <div>
          <AppBar positio="static" elevation={5} style={{backgroundColor:"transparent"}}>
              <Toolbar>
                  <Typography variant="h6" style={{backgroundColor:"darkgray", color:"black",}}>
                     <a href="/home"> Piston </a>
                  </Typography>
                  
                  <Grid item xs={10}>
                  <Button variant="outlined" color="inherit" href="/sos" style={{color:"gold",backgroundColor:"black",borderRadius:15}}>Emergency Contact</Button>
                  </Grid>
                  <Grid item xs={2}>
                  <Button variant="outlined" color="inherit" href="/ContactUs" style={{color:"gold",backgroundColor:"black",borderRadius:15}}>Contact us</Button>
                  </Grid>
              </Toolbar>
          </AppBar>

          
        </div>
                <div style={{backgroundImage:`url(${bg})`,display:"flex",height:"100vh",backgroundSize:"cover"}}>
                    <Card style={style.card1} elevation={10} variant="outlined">
                        <CardMedia
                        image={policepic}
                        style={{height:200,width:300}}
                        />
                    <p style={{textAlign:"center",color:"black",fontSize:20}}><b>
                        Call <br/>
                        <h2 style={{color:"darkred"}}>119</h2><br/>
                        For emergency police help</b>
                    </p>
                    </Card>
                    <Card style={style.card1} elevation={10} variant="outlined">
                    <CardMedia
                        image={ambulance}
                        style={{height:200,width:300}}
                        />
                    <p style={{textAlign:"center",color:"black",fontSize:20}}><b>
                        Call <br/>
                        <h1 style={{color:"darkred"}}>1990</h1><br/>
                        For Free 1990 Suwaseriya Emergency Ambulance Service</b>
                    </p>
                    </Card>
                    <Card style={style.card1} elevation={10} variant="outlined">
                    <CardMedia
                        image={fire}
                        style={{height:200,width:300}}
                        />
                    <p style={{textAlign:"center",color:"black",fontSize:20}}><b>
                        Call <br/>
                        <h1 style={{color:"darkred"}}>110</h1><br/>
                        For Emergency fire service</b>
                    </p>
                    </Card>
                </div>

            </React.Fragment>
        )
    }
}