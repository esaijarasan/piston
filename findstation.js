import React, { Component } from 'react'
import { Card } from '@material-ui/core';

const style={
card:{
backgroundColor:"black",
color:"gold",
marginLeft:50,
height:"auto",
width:200,
marginTop:100
}
}


function createData(shopname,otime,ctime) {
return {shopname,otime,ctime};
}

const rows = [
createData("Nelliady car wash","08.00 am","05.00 pm"),
createData("ABCD","09.00 am","07.00 pm"),
createData("ABCDE","06.00 am","05.30 pm"),
createData("ABCDEF","07.00 am","06.00 pm"),
createData("ABCDEFGH","08.30 am","05.30 pm"),
];


export default class FindStation extends Component{
constructor(){
super()
}

render(){
return(
<div style={{display:"flex"}}>
{rows.map((row) => (
<div>

<Card style={style.card}>
<p><b>{row.shopname}</b></p>
<p>{row.otime}</p>
<p>{row.ctime}</p>
</Card>

</div>
))}
</div>
);
}
}