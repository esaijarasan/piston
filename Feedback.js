import React, { Component } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
	
	import Rating from '@material-ui/lab/Rating';
	import { Card, TextareaAutosize, Button, FormControl,TextField } from '@material-ui/core';
import ApiService from '../service/ApiService';
import FooterXXX from './Footer';
	// import pic from './images/feedback.jpg'
	import {AppBar,Toolbar, IconButton, Grid,Typography } from '@material-ui/core'


	const mystyle = {
		fontFamily: "Arial",
		backgroundColor:"transparent",
		};
	
export default class Feedback extends Component{

		constructor(props){
			super(props);
			this.state ={
				//date: '',
				agentRating: 3,
				appRating: 3,
				comment: '',
				userId: '',
				phoneNumber: '',
				message: null
			}
			// this.saveFeedBck = this.saveFeedBck.bind(this);
		}
		componentDidMount() {
			// this.FeedBckList();
		}
	
		

		addFeedBck = () => {
			window.localStorage.removeItem("id");
			this.props.history.push('/feedbacks');
		}


		saveFeedBck = (event) => {
			event.preventDefault();
			let FeedBck = {
				//date: this.state.date, 
				agentRating: this.state.agentRating, 
				appRating: this.state.appRating, 
				comment: this.state.comment, 
				userId: this.state.userId, 
				phoneNumber: this.state.phoneNumber};
			ApiService.saveFeedBck(FeedBck)
				.then(res => {
					this.setState({message : 'feedBack added successfully.'});
					this.props.history.push('/feedbacks');
				});
		}
	
		onChangeagentRating = (event)=>{
			this.setState({
				agentRating:event.target.value,
			});
		}

		onChangeappRating =(event)=>{
			this.setState({
				appRating:event.target.value
			});
		}

		onChangecomment =(event)=>{
			this.setState({
				comment:event.target.value
			});
		}
	
		componentDidMount(){
			this.reloadFeedbackList();
		  }
		
		  reloadFeedbackList = () => {
			ApiService.getAllFeedback()
			   .then((Response) => {
				 this.setState({FeedbackArr:Response.data})
			   })
		  }
		  





	handleSubmit= (event) => {
		console.log("hii")
		event.preventDefault();
		
		if (this.state.agentRating && this.state.appRating && this.state.comment ) {
			console.log(this.state.agentRating + " " + this.state.appRating + " " + this.state.comment)
			this.props.history.push("/MainPage")
		} else {
			this.setState({
				successful: false,
				message: "please fill all feilds"
			})
		}
		
	}
	

	render(){
	return(<div>
	<div className="feedback">

	<div>
                <AppBar position="static" style={mystyle}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" >
                            <img src="https://dynamic.brandcrowd.com/preview/logodraft/207be0dc-ebe7-4be0-9c20-327e88b66c5f/image/large.png" style={{width:"80px",height:"70px"}} ></img>
                        </Typography>
                        
                        <Grid item xs={9}>
                        <Button href="/Home"  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>HOME</Button>

                        </Grid>

						<Grid item xs={2}>
						<Button type="submit"  href="/ViewFeedback" variant="outlined" onClick={(event) => this.reloadFeedbackList(event)}>view feedbacks</Button>

                        </Grid>

                        <Grid item xs={2}>
                        <Button  variant="contained" href="/Profile" style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Profile</Button>
                        </Grid>
                        <Grid item xs={1} >
                        <Button  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>

				{this.state.message&&(
    <Alert style={{ marginLeft:1200,color:"green"}} severity="success">
        <AlertTitle><b>Success</b></AlertTitle>
        <strong>{this.state.message}</strong>
    </Alert>
)}
            </div>

		<form  onSubmit={this.handleSubmit} >
		
	<Card></Card>
	<Card elevation={20}  style={{height:450,width:450,textAlign:"center",backgroundColor:"transparent",color:"black",padding:20,marginLeft:"3%",marginTop:"5%",borderRadius:50}}>

	
                            
							<p  type="number" id="outlined-required" label="agentRating" value={this.state.agentRating} variant="outlined" helperText="share the experience with our assistant"   > share the experience with our assistant </p> 
							<Rating value={this.state.agentRating} onChange={this.onChangeagentRating} />
							


						
                            
							<p type="number" id="outlined-required" label="appRating" value={this.state.appRating} variant="outlined" helperText="share the experience with our app"  >  share the experience with our app</p>
							<Rating value={this.state.appRating} onChange={this.onChangeappRating}/>
							
							

							
                            <FormControl>
							<TextField type="" id="outlined-required" label="comment" value={this.state.comment} variant="outlined" helperText="Give us some ideas where we need improvements"  onChange={this.onChangecomment} />

							</FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp; 	
							
	
	
	
	<Button type="submit" variant="outlined" onClick={(event) => this.saveFeedBck(event)}>Submit</Button>
	</Card>
	</form>
	{/* <li>{this.state.message}</li> */}
	</div>

	</div>
	
	)
	}

}
