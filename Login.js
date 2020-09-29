import React, { Component } from 'react'
	import { Card, CardContent, TextField, FormControl, Grid, Button, Paper, Typography } from '@material-ui/core'
	// import bg from './images/Loginpic.jpg';
	import {ValidatorForm} from 'react-form-validator-core';
	
	const style = {
	card : {
	width:300,
	height:300,
	backgroundColor:"transparent",
	marginTop:"10%",
	marginLeft:"50%",
	borderRadius:30,
	color:"black"
	}
	}
	
	
	export default class Login extends Component{
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
	this.setState({
	successful: true,
	message: "loged in successfully"
	})
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
	<div className="loginbg">
	<div>
	<Card>
	
	</Card>
	<Card style={style.card} elevation={0} variant="outlined">
	<CardContent>
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
	style={{marginTop:10,color:"black",backgroundColor:"sienna",marginLeft:80,color:"white"}}
	type="submit"
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
	Don't have an account?. Signup <a href="#">here</a>
	</boom>
	</CardContent>
	</Card>
	</div>
	
	</div>
	)
	}
	}