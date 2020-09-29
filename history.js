import React, { Component } from 'react'
import { Paper, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';


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

export default class History extends Component{
render(){
return(
<div>
<Paper elevation={0}>

<TableContainer style={{backgroundColor:"lightblue",marginTop:80,marginLeft:"25%", border:"2px solid black",height:"auto",width:400,textAlign:"center"}} component={Paper}>
<h1><u>History</u></h1>
<Table aria-label="simple table">
<TableBody>
{rows.map((row) => (
<TableRow key={row.name}>
<TableCell align="left"><b>{row.date} <br/> Rs.{row.price} <br/> {row.servicetype}</b></TableCell>


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