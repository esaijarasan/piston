import React, { Component } from 'react'
	
	import Rating from '@material-ui/lab/Rating';
	import { Card, TextareaAutosize, Button } from '@material-ui/core';
	import pic from './images/feedback.jpg'
	
	export default class Feedback extends Component{
	render(){
	return(
	<div style={{backgroundImage:`url(${pic})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",height:"100vh"}}>
	<Card></Card>
	<Card elevation={20} style={{height:"auto",width:350,textAlign:"center",backgroundColor:"darkcyan",color:"black",padding:20,marginLeft:"3%",marginTop:"10%",borderRadius:50}}>
	<p>share the experience with our assistant</p>
	<Rating defaultValue={5}/>
	<p>share the experience with our app</p>
	<Rating defaultValue={5}/>
	<p>Give us some ideas where we need improvements</p>
	<TextareaAutosize style={{height:100,maxWidth:300,width:220,background:"transparent",borderColor:"gold"}} placeholder="give your suggestions here"/><br/>
	
	<Button variant="outlined">Submit</Button>
	</Card>
	</div>
	);
	}
	}