import React, { Component } from 'react';
	import { Card, Paper, CardActionArea, Grid, Typography, CardMedia, Slide } from '@material-ui/core';
	import cardbg from './all.css';
	import bg from './all.css';
	import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import { IconButton,AppBar,Toolbar,Button } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import TextField from '@material-ui/core/TextField';
import {  InputAdornment} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';



	// // import usercon from './images/usercontrolpic.jpg'
	// import servicecon from './images/useractpic.jpg'
	// import settingcon from './images/settingspic.jpg'
	import UserControl from './UserControl';
	import Table from '@material-ui/core/Table';
	import TableBody from '@material-ui/core/TableBody';
	import TableCell from '@material-ui/core/TableCell';
	import TableContainer from '@material-ui/core/TableContainer';
	import TableHead from '@material-ui/core/TableHead';
	import TableRow from '@material-ui/core/TableRow';
import historyService from '../service/historyService';

const mysstyle = {
    fontFamily: "Arial",
    backgroundColor:"transparent",
    };

const useStyles1 = makeStyles((theme) => ({
	root: {
	  flexShrink: 0,
	  marginLeft: theme.spacing(2.5),
	},
  }));
  
  function TablePaginationActions(props) {
	const classes = useStyles1();
	const theme = useTheme();
	const { count, page, rowsPerPage, onChangePage } = props;
  
	const handleFirstPageButtonClick = (event) => {
	  onChangePage(event, 0);
	};
  
	const handleBackButtonClick = (event) => {
	  onChangePage(event, page - 1);
	};
  
	const handleNextButtonClick = (event) => {
	  onChangePage(event, page + 1);
	};
  
	const handleLastPageButtonClick = (event) => {
	  onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};
  
	return (
	  <div className={classes.root}>
		<IconButton
		  onClick={handleFirstPageButtonClick}
		  disabled={page === 0}
		  aria-label="first page"
		>
		  {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
		</IconButton>
		<IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
		  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
		</IconButton>
		<IconButton
		  onClick={handleNextButtonClick}
		  disabled={page >= Math.ceil(count / rowsPerPage) - 1}
		  aria-label="next page"
		>
		  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
		</IconButton>
		<IconButton
		  onClick={handleLastPageButtonClick}
		  disabled={page >= Math.ceil(count / rowsPerPage) - 1}
		  aria-label="last page"
		>
		  {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
		</IconButton>
	  </div>
	);
  }
  
  TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onChangePage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
  };
  
  
  
  
  const mystyle = {
	  fontFamily: "Arial",
	  backgroundColor:"transparent",
	  };
  const style ={
	  // display: 'flex',
	  // justifyContent: 'center'
	  table: {
			minWidth: 900,
		  },
	  grid: {
			  margin: '35px 150px 20px 50px',
			  padding: '10px 10px 10px 10px',
			  backgroundColor: "black"
		  },
	  paper: {
			padding: '10px 10px 10px 10px', 
			margin: '10px 10px 10px 10px',
			position: 'inherit'
		  },
	  search: {
			position: 'relative',
			align:'left',
			},
			card : {
				height:360,
				width:400,
				color:"gold",
				marginLeft:100,
				borderRadius:50,
				backgroundColor:"transparent",
				border:"5px solid gold",
				
				},
  }
  
	
	
	

	
	// table: {
	// minWidth: 650,
	// height:"auto"
	// },
	
	function createData(userentries) {
	return {userentries};
	}
	
	// const rows = [
	// createData(" **** joined to piston"),
	// createData(" ****** book for rent"),
	// createData(" ******* book for quick assistance"),
	// createData(" *****'s account has been deleted"),
	// createData(" ***** is loged in"),
	// ];
	
	export default class Adminpage extends Component{
		constructor(props){
			super(props);
				this.state ={
			page:0,
			rowsPerPage:5,
			count:0,
			message: null,
			historyArr: [],
				}
			// this.saveFeedBck = this.saveFeedBck.bind(this);
		}
		componentDidMount(){
			this.reloadhistoryList();
		   
		  }
		  handleChangePage = (event, newPage) => {
			this.setState({
			  page:newPage
			});
		   historyService.getAllHistory(newPage,5)
			.then((Response) => {
			  console.log("Response");
			  this.setState({
				  historyArr:Response.data.data,
				count:Response.data.TotalNoOfElements
			   })
			})
			.catch(error => {
			  console.log("error");
			})
		  };
	  
		  handleChangeRowsPerPage = (event) => {
			//setRowsPerPage(parseInt(event.target.value, 10));
			this.setState ({
			  page:0,
			  rowsPerPage:event.target.value
			})
		  };




		componentDidMount(){
			this.reloadhistoryList();
		  }
		
		  reloadhistoryList = () => {
			historyService.getAllHistory(this.state.page,5)
			   .then((Response) => {
				   console.log(Response);
				 this.setState({
					 historyArr:Response.data.data,
					count:Response.data.TotalNoOfElements})
			   })
		  }
	
		  deletehistoryByuserId = (id) => {
       
			historyService.deletehistorByyuserId(id)
			   .then(res => {
				   this.setState({message : 'history deleted successfully.'});
				   this.setState({historyArr: this.state.historyArr.filter(historyArr => historyArr.id !== id)});
			   })
	
		}
	





	
	render(){
	return(
	<div >

<div>
                <AppBar position="static" style={mysstyle}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" >
                            <img src="https://dynamic.brandcrowd.com/preview/logodraft/207be0dc-ebe7-4be0-9c20-327e88b66c5f/image/large.png" style={{width:"80px",height:"70px"}} ></img>
                        </Typography>
                        
                        <Grid item xs={9}>
                        <Button href="/Home"  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>HOME</Button>

                        </Grid>

                        <Grid item xs={2}>
                        <Button  variant="contained"  href="/feedbacks"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Feedbacks</Button>
                        </Grid>


                        <Grid item xs={2}>
                        <Button  variant="contained"  href="/viewmessages"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>messages</Button>
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







	
	<div style={{display:"flex",padding:20,background:"black",marginTop:70}}>
	<Grid item xs={12} >
	<Card style={style.card} className="cardbg" elevation={12} variant="outlined">
	<CardActionArea href="/UserControl">
	<Typography>
	<h3 style={{textAlign:"center"}}>view Users</h3>
	</Typography>
	<CardMedia
	// image={usercon}
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
	// image={servicecon}
	style={{height:300,width:"auto"}}
	/>
	</CardActionArea>
	</Card>
	</Grid>
	
	</div>
	{/* <Paper>
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
	</Paper> */}
	   <Grid style={style.grid}>
               <Paper style = {style.paper}>
                   <h1 style={{backgroundColor:"lightcyan"}}>View History</h1>
                   <div style={style.search}>
                       <div style={style.searchIcon} style = {{float: 'right',marginBottom:"50px"}}>
                      
                      
                     <TextField
                 
                  id="input-with-icon-textfield"
                  label="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon/>
                      
                      </InputAdornment>
                    ),
                  }}
                />
                        
                      </div>
                  </div>
                  
                  <TableContainer>
                <Table style={style.table} size="small">
                  <TableHead>
                    <TableRow >
                    
                      <TableCell align="left"><b>Id</b></TableCell>
                      <TableCell align="left"><b>Userid</b></TableCell>
                      <TableCell align="left"><b>servicestationid</b></TableCell>
                      <TableCell align="left"><b>vehicleTypes</b></TableCell>
                      <TableCell align="left"><b>phoneNumber</b></TableCell>
                      <TableCell align="left"><b>serviceType</b></TableCell>
                      <TableCell align="left"><b>action</b></TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.historyArr.map((row) => (
                      <TableRow>
                        
                       
                       
                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">{row.userid}</TableCell>
                        <TableCell align="left">{row.servicestationid}</TableCell>
                        <TableCell align="left">{row.vehicleTypes}</TableCell>
                        
                        <TableCell align="left">{row.phoneNumber}</TableCell>
                        <TableCell align="left">{row.serviceType}</TableCell>
                        <TableCell align="left" onClick= {()=>this.deletehistoryByuserId(row.id)}><IconButton ><DeleteIcon color="error"  inputProps={{ 'aria-label': 'DeleteIcon with default color' }}/></IconButton>

                       <IconButton href="/Eaditproduct" ></IconButton > </TableCell>
                      
                      </TableRow>
                     ))} 
                    
                  </TableBody>
                  <TableFooter>
          <TableRow>
            <TablePagination
              // rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              // colSpan={3}
              count={this.state.count}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
                </Table>
          
               
              </TableContainer>
          
              
              
                </Paper>
              </Grid>
	</div>
	);
	}
	}