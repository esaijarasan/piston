import React, { Component } from 'react'
	
	import Rating from '@material-ui/lab/Rating';
	import { Card, TextareaAutosize, Button } from '@material-ui/core';
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
				date: '',
				agentRating: '',
				appRating: '',
				comment: '',
				userId: '',
				phoneNumber: '',
				message: null
			}
			// this.saveFeedBck = this.saveFeedBck.bind(this);
		}
		componentDidMount() {
			this.FeedBckList();
		}
	
		FeedBckList = () => {
			ApiService.getAllFeedback()
				.then((res) => {
					this.setState({users: res.data})
				});
		}

		addFeedBck = () => {
			window.localStorage.removeItem("id");
			this.props.history.push('/feedbacks');
		}


		// saveFeedBck = (e) => {
		// 	e.preventDefault();
		// 	let FeedBck = {date: this.state.date, agentRating: this.state.agentRating, appRating: this.state.appRating, comment: this.state.comment, userId: this.state.userId, phoneNumber: this.state.phoneNumber};
		// 	ApiService.saveFeedBck(FeedBck)
		// 		.then(res => {
		// 			this.setState({message : 'feedBack added successfully.'});
		// 			this.props.history.push('/feedbacks');
		// 		});
		// }
	
		onChange = (e) =>
			this.setState({ [e.target.name]: e.target.value });

	
	handleSubmit= (e) => {
		console.log("hii")
		e.preventDefault();
		
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
                        <Button  variant="contained" href="/Profile" style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Profile</Button>
                        </Grid>
                        <Grid item xs={1} >
                        <Button  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>

		<form  onSubmit={this.handleSubmit} >
		
	<Card></Card>
	<Card elevation={20}  style={{height:450,width:450,textAlign:"center",backgroundColor:"transparent",color:"black",padding:20,marginLeft:"3%",marginTop:"5%",borderRadius:50}}>
	<p name="agentRating" value={this.state.agentRating} >share the experience with our assistant</p>
	<Rating defaultValue={5}/>
	<p name="appRating" value={this.state.appRating}>share the experience with our app</p>
	<Rating defaultValue={5}/>
	<p name="comment" value={this.state.comment}>Give us some ideas where we need improvements</p>
	<TextareaAutosize style={{height:100,maxWidth:300,width:220,background:"transparent",borderColor:"gold"}} placeholder="give your suggestions here"/><br/>
	
	<Button type="submit" variant="outlined" onClick={() => this.addFeedBck()}>Submit</Button>
	</Card>
	</form>
	
	</div>

	</div>
	
	)
	}

}
