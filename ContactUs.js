import React, { Component } from 'react'
import { Paper, TextField, Button, Card, CardMedia, Typography, AppBar, Toolbar, Grid, FormControl } from '@material-ui/core'
import pic from './contactuspic.jpg';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import contactUsService from '../service/contactUsService';
import { Alert, AlertTitle } from '@material-ui/lab';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
    constructor(props){
        super(props);
        this.state ={
            //date: '',
            name: "",
            email: "",
            messages: '',
           
        }
    }
    componentDidMount() {
        // this.FeedBckList();
    }

    

    addmessage = () => {
        window.localStorage.removeItem("id");
        this.props.history.push('/ContactUs');
    }


    saveMessage = (event) => {
        event.preventDefault();
        let messag = {
            //date: this.state.date, 
            name: this.state.name, 
            email: this.state.email, 
            messages: this.state.messages, 
            };
            contactUsService.saveMessage(messag)
            .then(res => {
                this.setState({message : 'your message sent Successfuly.'});
                this.props.history.push('/ContactUs');
                
            });
    }
    onChangename = (event)=>{
        this.setState({
            name:event.target.value,
        });
    }

    onChangeemail =(event)=>{
        this.setState({
            email:event.target.value
        });
    }

    onChangemessages =(event)=>{
        this.setState({
            messages:event.target.value
        });
    }
  


      handleSubmit= (event) => {
		console.log("hii")
		event.preventDefault();
		
		if (this.state.name && this.state.email && this.state.messages ) {
			console.log(this.state.name + " " + this.state.email + " " + this.state.messages)
			// this.props.history.push("/MainPage")
		} else {
			this.setState({
				successful: false,
				message: "please fill all feilds"
			})
		}
		
	}

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

{this.state.message&&(
    <Alert style={{marginLeft:1200,color:"green"}} severity="success">
        <AlertTitle><b>Success</b></AlertTitle>
        <strong>{this.state.message}</strong>
    </Alert>
)}
</Card>
</Card>


</div>

<Paper  style={style.paper}>
<Card style={style.messagecard}>




           

{/* <form   > */}
         <h1><b>Get in Touch </b></h1>
            <p style={{color:"green"}}>Please fill out the qiuck form and we will be in touch very soon </p>
            <ValidatorForm
                ref="form"
                onSubmit={this.saveMessage}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Name"
                    onChange={this.onChangename}
                    name="name"
                    value={this.state.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />

                <TextValidator
                    label="Email"
                    onChange={this.onChangeemail}
                    name="email"
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />

                <TextValidator
                    label="Message"
                    onChange={this.onChangemessages}
                    name="messages"
                    value={this.state.messages}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />

                <Button type="submit">Submit</Button>
            </ValidatorForm>
{/* <FormControl>
<TextField type="text"
 required id="outlined-required" label="name" style={style.textf} value={this.state.name} variant="outlined" helperText="Enter Your Name"  onChange={this.onChangename}
>name</TextField>
<br/>

<TextField
 type="email" required id="outlined-required" label="email" style={style.textf} value={this.state.email} variant="outlined" helperText="Enter Your Email"  onChange={this.onChangeemail}

/>
<br/>

<TextField
  id="outlined-required" label="messages" style={style.textf} value={this.state.messages} variant="outlined" helperText="Enter Your messages"  onChange={this.onChangemessages}

/><br/>

<Button type="submit" style={style.submitbutton} onSubmit={this.handleSubmit}
 variant="outlined" onClick={(event) => this.saveMessage(event)}>Submit</Button></FormControl></form> */}
</Card>

{/* style={style.submitbutton} */}

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