import React, { Component } from 'react'
import { Paper, TextField, Button, Card, CardMedia, Typography, AppBar, Toolbar, Grid } from '@material-ui/core'
import pic from './contactuspic.jpg';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

const style={
textf:{
marginBottom:20,
marginLeft:10,
width:300,
},
paper:{
height:"auto",
width:"auto",
background:"gray",
textAlign:"center",
display:"flex"
},
submitbutton:{
backgroundColor:"black",
color:"gold",
marginBottom:10
},
messagecard:{
backgroundColor:"gold",
marginLeft:100,
width:"40%"
},
imagebg:{
backgroundImage:`url(${pic})`,
height:400,
width:"100vw",
backgroundSize:"cover",
marginBottom:40
},
card2:{
backgroundColor:"black",
color:"white",
marginLeft:50,
height:"auto",
width:"auto",
alignContent:"center",
padding:20
}
}

export default class ContactUs extends Component{
render(){
return(
<>
<div>
          <AppBar positio="static" elevation={5} style={{backgroundColor:"transparent"}}>
              <Toolbar>
                  <Typography variant="h6" style={{backgroundColor:"darkgray", color:"black",}}>
                     <a href="/home"> Piston </a>
                  </Typography>
                  
                  <Grid item xs={10}>
                  <Button variant="outlined" color="inherit" href="/sos" style={{color:"gold",backgroundColor:"black",borderRadius:15}}>Emergency Contact</Button>
                  </Grid>
                  <Grid item xs={2}>
                  <Button variant="outlined" color="inherit" href="/ContactUs" style={{color:"gold",backgroundColor:"black",borderRadius:15}}>Contact us</Button>
                  </Grid>
              </Toolbar>
          </AppBar>

          
      </div>

<div style={style.imagebg}>
<Card elevation={0} style={{backgroundColor:"transparent"}}>
<Card elevation={0} style={{marginTop:200,textAlign:"center",color:"red",backgroundColor:"transparent"}}>
<h1>Lets Have a Conversation</h1>
</Card>
</Card>

</div>
<Paper style={style.paper}>
<Card style={style.messagecard}>
<form>
<h1><b>Get in Touch </b></h1>
<p style={{color:"green"}}>Please fill out the qiuck form and we will be in touch very soon </p>

<TextField
variant="standard"
placeholder="Enter your name"
style={style.textf}
/>
<br/>

<TextField
variant="standard"
placeholder="Enter your Email"
style={style.textf}
/>
<br/>

<TextField
variant="standard"
placeholder="Enter your message"
style={style.textf}
/><br/>

<Button variant="outlined" style={style.submitbutton}>Submit</Button>
</form>
</Card>

<Card style={style.card2}>
<table>
<tr>
<td><BusinessRoundedIcon/></td><td>No 29/b,<br/>Pointpedro road,<br/>jaffna.</td>
</tr>
<tr>
<td><EmailRoundedIcon/></td><td style={{paddingLeft:50}}>Email us at : <a href="#" style={{color:"pink"}}>pistonhelp001@gmail.com</a></td>
</tr>
<tr>
<td><PhoneRoundedIcon/></td><td style={{paddingLeft:50}}>Talk to an agent in : 0701014018</td>
</tr>
</table>
</Card>


</Paper>

</>
)
}
}