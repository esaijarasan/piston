import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
table: {
minWidth: 650,
height:"auto"
},
});

function createData(username, Email, mobno) {
return { username, Email, mobno };
}

const rows = [
createData('Paranitharan',"Parani@gmail.com", "0147258369"),
createData('Esaiajarasan', "Esai@gmail.com", "1472583690"),
createData('Sinthujan', "Sinthu@gmail.com", "2583691470"),
createData('Abcd', "abcd@gmail.com", "1234567890"),
createData('Abcdef', "Abcdef@gmail.com", "7891234560"),
];

// onRowDelete = (oldData) =>
// new Promise((resolve) => {
// setTimeout(() => {
// resolve();
// setState((prevState) => {
// const data = [...prevState.data];
// data.splice(data.indexOf(oldData), 1);
// return { ...prevState, data };
// });
// }, 600);
// })

export default function SimpleTable() {
const classes = useStyles();

return (
<Paper>
<TableContainer style={{backgroundColor:"lightgray",marginTop:80, border:"2px solid black"}} component={Paper}>
<Table className={classes.table} aria-label="simple table">
<TableHead>
<TableRow style={{backgroundColor:"black"}}>
<TableCell style={{color:"gold"}}></TableCell>
<TableCell style={{color:"gold"}}><b>User Name</b></TableCell>
<TableCell style={{color:"gold"}} align="right"><b>Email</b></TableCell>
<TableCell style={{color:"gold"}} align="right"><b>Mobile number</b></TableCell>

</TableRow>
</TableHead>
<TableBody>
{rows.map((row) => (
<TableRow key={row.name}>
<TableCell><Button><DeleteRoundedIcon/></Button></TableCell>
<TableCell component="th" scope="row">{row.username}</TableCell>
<TableCell align="right">{row.Email}</TableCell>
<TableCell align="right">{row.mobno}</TableCell>

</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
</Paper>
);
}