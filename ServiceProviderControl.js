import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
table: {
minWidth: 650,
height:"auto"
},
});

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

export default function ServicePcontrol() {
const classes = useStyles();

return (
<Paper>
<TableContainer style={{backgroundColor:"lightgray",marginTop:80, border:"2px solid black"}} component={Paper}>
<Table className={classes.table} aria-label="simple table">
<TableHead>
<TableRow style={{backgroundColor:"black"}}>
<TableCell style={{color:"gold"}}><b>Recent Activities</b></TableCell>

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
);
}