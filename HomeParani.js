import React, { Component } from 'react';
	import {AppBar, Button, Typography,Toolbar, Grid, Paper, Card, CardContent} from '@material-ui/core';
	import Footer from './Footer';
	// import { Switch} from 'react-router';
	// import Car from './images/car1.jpg';
	import Login from './Login';
	import Signup from "./Register.js"
	import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterXXX from './Footer';
	
	
	
	const style = {
	card : {
	backgroundColor:"darkslategrey",
	height:254,
	width:500,
	marginTop:150,
	marginLeft:300,
	},
	buttonl: {
	height:100,
	width:150,
	backgroundColor:"lightgreen"
	},
	Contentback: {
	height:450,
	width:400,
	opacity:0.7,
	marginTop:70,
	marginLeft:70,
	backgroundColor:"black",
	},
	
	}
	
	export default class Home extends Component{
	constructor(){
	super();
	}
	
	render(){
	return(
	<div className='/Homebg'>
	<Router>
	<div>
	<Switch>
	<Route path={["/Login1"]} component={Login} />
	<Route path={["/signupuser"]} component={Signup} />
	<Route path={["/Login2"]} component={Login} />
	<Route path={["/signupservice"]} component={Signup} />
	</Switch>
	</div>
	</Router>
	<div>
	<AppBar position="static" style={{backgroundColor:"black"}}>
	<Toolbar>
	<Typography variant="h6" style={{backgroundColor:"darkgray", color:"black",}}>
	Piston
	</Typography>
	
	<Grid item xs={10}>
	<Button color="inherit" >About us</Button>
	
	<Button color="inherit">Police help</Button>
	
	<Button color="inherit" >Ambulance service</Button>
	</Grid>
	<Grid item xs={2}>
	<Button color="inherit">Contact us</Button>
	</Grid>
	</Toolbar>
	</AppBar>
	
	
	</div>
	<div style={{display:'flex',flexWrap:"wrap"}}>
	<Grid item xs={3}>
	<Card style={style.Contentback}>
	<div>
	<p style={{color:"white"}}>
	<h3>small intro</h3>
	gsfbkvbsdkbvdsads
	dsahvcjsavhvcdas
	cdfxjasvhcujvdashcs
	dfsnangfksgknf
	sdjanfndsalknfgsa
	ngsoanfgknaregvsra
	nsknfagdknknfsknv
	avnsaknvflknavkn
	vdsuhva</p>
	</div>
	</Card>
	</Grid>
	
	<Grid item xs={3}>
	<Card style={style.card} elevation={12}>
	<CardContent>
	<Card style={{width:450,height:100}} elevation={5}>
	<Button href="/Login1" style={style.buttonl}>
	Login as user
	</Button>
	Don't have an account?.
	Signup <a href="/signupuser">Here.</a>
	</Card>
	
	<Card elevation={5} style={{width:450,height:100,marginTop:20}}>
	<Button href="/Login2" style={style.buttonl} >
	Login as <br></br>service provider
	</Button>
	Don't have an account?.
	Signup <a href="signupservice">Here.</a>
	</Card>
	
	</CardContent>
	</Card>
	</Grid>
	
	{/* <FooterXXX/> */}
	</div>
	
	</div>
	)
	}
	}