import React, { Component } from 'react';
	import { Card, Paper, CardActionArea, Grid, Typography, CardMedia, Slide } from '@material-ui/core';
	import cardbg from './all.css';
	import bg from './all.css';
	import usercon from './images/usercontrolpic.jpg'
	import servicecon from './images/useractpic.jpg'
	import settingcon from './images/settingspic.jpg'
	import UserControl from './UserControl';
	import Table from '@material-ui/core/Table';
	import TableBody from '@material-ui/core/TableBody';
	import TableCell from '@material-ui/core/TableCell';
	import TableContainer from '@material-ui/core/TableContainer';
	import TableHead from '@material-ui/core/TableHead';
	import TableRow from '@material-ui/core/TableRow';
	
	
	
	
	const style = {
	card : {
	height:360,
	width:400,
	color:"gold",
	marginLeft:100,
	borderRadius:50,
	backgroundColor:"transparent",
	border:"5px solid gold",
	
	},
	table: {
	minWidth: 650,
	height:"auto"
	},
	};
	
	function createData(userentries) {
	return {userentries};
	}
	
	const rows = [
	createData(" **** joined to piston"),
	createData(" ****** book for rent"),
	createData(" ******* book for quick assistance"),
	createData(" *****'s account has been deleted"),
	createData(" ***** is loged in"),
	];
	
	export default class Adminpage extends Component{
	constructor(){
	super()
	}
	
	render(){
	return(
	<div >
	
	<div style={{display:"flex",padding:20,background:"black",marginTop:70}}>
	<Grid item xs={12} >
	<Card style={style.card} className="cardbg" elevation={12} variant="outlined">
	<CardActionArea href="/UserControl">
	<Typography>
	<h3 style={{textAlign:"center"}}>view Users</h3>
	</Typography>
	<CardMedia
	image={usercon}
	style={{height:300,width:"auto"}}
	/>
	</CardActionArea>
	</Card>
	</Grid>
	<Grid item xs={12}>
	<Card style={style.card} elevation={12} variant="outlined">
	<CardActionArea href="/Serviceprovidercontrol">
	<Typography>
	<h3 style={{textAlign:"center"}}>Admin Profile</h3>
	</Typography>
	<CardMedia
	image={servicecon}
	style={{height:300,width:"auto"}}
	/>
	</CardActionArea>
	</Card>
	</Grid>
	
	</div>
	<Paper>
	<TableContainer style={{backgroundColor:"lightgray",marginTop:80, border:"2px solid black"}} component={Paper}>
	<Table className={style.table} aria-label="simple table">
	<TableHead>
	<TableRow style={{backgroundColor:"black"}}>
	<TableCell style={{color:"gold",textAlign:"center"}}><b>Recent Activities</b></TableCell>
	
	</TableRow>
	</TableHead>
	<TableBody>
	{rows.map((row) => (
	<TableRow key={row.name}>
	
	<TableCell component="th" scope="row">
	{row.userentries}
	</TableCell>
	</TableRow>
	))}
	</TableBody>
	</Table>
	</TableContainer>
	</Paper>
	</div>
	);
	}
	}