import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, Grid, Paper, Card, CardContent, TextField} from '@material-ui/core';
// import Footer from './Footer';
// import { Switch} from 'react-router';
// import Car from './images/Loginpic.jpg';
// import Login from './Login';
// import Signup from './signup';
// import homebg from './all.css';
import './all.css'
// import { Router } from '@material-ui/icons';

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Login from './Components/Login';
// import Signup from './Components/signup';
// import {  AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterXXX from './Footer';
// import Home from './Components/Home';


// import Register from './Register';
// import Adminpage from './Components/Admin';
// import UserControl from './Components/UserControl';
// import Sos from './Components/SOS';
// import ServicePcontrol from './Components/ServiceProviderControl';



const style = {
    card : {
        backgroundColor:"black",
        height:254,
        width:500,
        marginTop:150,
        marginLeft:300,
        
    },
    buttonl: {
        height:100,
        width:150,
        backgroundColor:"lightblue"
    },
    Contentback: {
        height:350,
        width:300,
        // opacity:0.7,
        marginTop:90,
        marginLeft:70,
        backgroundColor:"transparent",       
    },
    card2 : {
        width:300,
        height:"auto",
        backgroundColor:"transparent",
        marginTop:"40%",
        marginLeft:600,
        borderRadius:30, 
        color:"black",
        border: '2px solid'
    },
    
    
  }

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            loginusername:"",
            loginpassword:"",
          };
      }
  
      handleUnameChange= (e) => {
        this.setState({
          loginusername: e.target.value
        });
        console.log(this.state.loginusername);
    }
      handlePasswordchange = (e) => {
        this.setState({
          loginpassword: e.target.value
        });
        console.log(this.state.loginpassword);
    }
  
    handleSubmit= (e) => {
      e.preventDefault();
      
      if (this.state.loginusername && this.state.loginpassword) {
          // console.log(this.state.loginusername + " " + this.state.loginpassword )
          this.props.history.push("/MainPage");
          window.location.reload();
        } else {
          this.setState({
            successful: false,
            message: "username/password is empty"
          })
        }
  
  }

    render(){
        const {loginusername, loginpassword} = this.state;
        return(
            
        <div className="Homebg">
           <div>
      
            
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
      
    </div>          
            
            {/* style={style.background} */}
            <div style={{display:'flex',}}>
            <Grid item xs={3}>
                <Card position="fixed" elevation={0} style={style.Contentback}>
                <div>
                <p style={{color:"black"}}>
                    <div style={{color:"gold",marginLeft:20}}><h1><b>Why US???</b></h1></div>
                    <b style={{fontFamily:"monospace",fontSize:"13px"}}>We are pleased to help you throughout your rough situations
                    and here we are providing a patform to get help whenever 
                    your vehicle get trouble on the road. Not only that but also 
                    we are providing an interface to hire a vehicle as per your need 
                    at a affordable price range. We are looking towards to give a good
                    service to our users. Feel free to contact us regarding any suggestions
                    to improve our service.</b></p>
                </div>
                </Card> 
            </Grid>
            
            <Grid item xs={3}>
            <div>
            
            <Card style={style.card2} variant="outlined">
              <CardContent>
              <Typography style={{marginLeft:"20%"}}><b>
              Login to PISTON</b>
            </Typography>
              <form
              onSubmit={this.handleSubmit}
              >
                <TextField 
                variant="standard" 
                label="Username" 
                value={loginusername}
                onChange={this.handleUnameChange}
                style={{marginTop:40,borderRadius:10}}
                validators={['required']}
                />

                <TextField 
                variant="standard" 
                label="Password" 
                value={loginpassword}
                style={{marginTop:10,borderRadius:10}}
                onChange={this.handlePasswordchange}
                type="password"
                />

                <Button
                variant="contained"
                name="Login"
                style={{marginTop:10,backgroundColor:"gold",marginLeft:80,color:"black"}}
                type="submit"
                // href="/MainPage"
                >Login</Button>

{
                      this.state.message && (
                      <div>
                        <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                            <strong>{this.state.message}</strong>
                        </Typography>
                      </div>
                    )
                    }
              </form>
              <br/>
              <boom>
                Don't have an account?. Signup <a href="/Register">here</a>
              </boom>
              </CardContent>
              </Card>
            </div>
            </Grid>
            
            {/* <FooterXXX/> */}
            </div>
            
        </div>   
        )   
    }
}