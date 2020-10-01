import React, { Component } from 'react'
import { Paper, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import {AppBar,Toolbar, Grid,Typography,Button } from '@material-ui/core'
import ApiService from '../service/ApiService';



function createData(date, price, servicetype) {
return { date, price, servicetype };
}

const rows = [
createData('12.05.2020',"500", "flat tyre"),
createData('08.10.2020', "1000", "mechanic service"),
createData('13.11.2020', "1500", "on road assistance"),
createData('13.05.2020', "1000", "water service"),
createData('01.03.2020', "3000", "on road assistance"),
createData('12.05.2020',"500", "flat tyre"),
createData('08.10.2020', "1000", "mechanic service"),
createData('13.11.2020', "1500", "on road assistance"),
createData('13.05.2020', "1000", "water service"),
createData('01.03.2020', "3000", "on road assistance"),
createData('12.05.2020',"500", "flat tyre"),
createData('08.10.2020', "1000", "mechanic service"),
createData('13.11.2020', "1500", "on road assistance"),
createData('13.05.2020', "1000", "water service"),
createData('01.03.2020', "3000", "on road assistance"),
];
const mystyle = {
    fontFamily: "Arial",
    backgroundColor:"transparent",
    };
export default class History extends Component{

    deleteHistory = (id) => {
    ApiService.deleteHistory(id)
            .then(res => {
                this.setState({message : 'history deleted.'});
               
            });
    }
    
render(){
return(
<div>
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
                        <Button  variant="contained"  href="/MainPage"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Back</Button>
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


<Paper elevation={0}>

<TableContainer style={{backgroundColor:"lightblue",marginTop:80,marginLeft:"25%", border:"2px solid black",height:"auto",width:400,textAlign:"center"}} component={Paper}>
<h1><u>History</u></h1>
<Table aria-label="simple table">
<TableBody>
{rows.map((row) => (
<TableRow key={row.name}>
<TableCell align="left"><b>{row.date} <br/> Rs.{row.price} <br/> {row.servicetype}</b></TableCell>
<TableCell><Button style={{backgroundColor:"red"}}>Delete</Button></TableCell>

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