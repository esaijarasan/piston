import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, IconButton, Grid, Paper, Card, CardContent} from '@material-ui/core'
// import { blue, cyan, red } from '@material-ui/core/colors';
// import Footer from './Footer';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Input from '@material-ui/core/Input';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './all.css'




const style = {
 
  
    mystyle : {
    fontFamily: "Arial",
    backgroundColor:"transparent",
    },

    root: {
          margin: `theme.spacing(1)`,
      },
      paper: {
        padding:20,
        marginLeft:55,
          marginTop:25,
        // padding: `theme.spacing(1)`,
        textAlign: 'left',
        color: "black",
        height:"auto",
        width:350,
        backgroundColor:"transparent",
        flexDirection: 'row'
      },
    };
  
  

  
  

  export default class ChoosePrb extends Component{
    constructor(){
      super();

      this.state = {
        contactno:"",
        problem:"",
        vehicle:"",
        message:""
      };
    }

    

    handleProblemChange=(e) => {
      this.setState({
          problem: e.target.value
      });
      console.log(this.state.problem);
    }

    handleVehicleChange=(e) => {
      this.setState({
        vehicle: e.target.value
      });
      console.log(this.state.vehicle);
    }

    handleContactnoChange=(e) => {
      this.setState({
        contactno: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      if(this.state.contactno && this.state.problem && this.state.vehicle){
        this.props.history.push("/GeoLocation");
      } 
      else {
        this.setState({
          successful:false,
          message:"please select required fields"
        })
      }
    }
  
  

    // classes = useStyles();


    // const [value, setValue] = React.useState('female');

    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };

   render(){
        return(
            <div className="chooseprb" >
            <div>
            <AppBar position="static" style={style.mystyle}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" >
                            <img src="https://www.pngitem.com/pimgs/m/120-1201491_download-blank-logo-for-picsart-blank-logo-for.png" style={{width:"80px",height:"70px"}} ></img>
                        </Typography>
                        
                        <Grid item xs={9}>
                        <Button href="/Home"  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>HOME</Button>
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

           
      <Paper style={style.paper}>
      <form style={style.root} noValidate autoComplete="off" >

            <Input required
             id="standard-required" 
             value={this.contactno} 
             onChange={this.handleContactnoChange} 
             label="Required" 
             placeholder="Enter Your Contact Number" 
             inputProps={{ 'aria-label': 'description' }} 
             style={{color:"dark black"}}
             />

            <FormControl component="fieldset">
                <FormLabel component="object"style={{color:"darkcyan" }}><b>choose Your Problem</b></FormLabel>
                
                <RadioGroup aria-label= "Choose your problem" name="problem" value={this.problem} onChange={this.handleProblemChange}>
                  <FormControlLabel value="NeedFuel" control={<Radio />} label="Need Fuel" />
                  <FormControlLabel value="Flattyre" control={<Radio />} label="Flat Tire" />
                  <FormControlLabel value="others" control={<Radio />} label="Others" />
                </RadioGroup>
            </FormControl>
            <br/><br/>  


            <FormControl component="fieldset">
                <FormLabel component="object"style={{color:"darkcyan" }}><b>Choose Your vehicle</b></FormLabel>
                <RadioGroup aria-label= "choose Your vehicle" name="problem" value={this.vehicle} onChange={this.handleVehicleChange}>
                  <FormControlLabel value="Motor Bike" control={<Radio />} label="Motor Bike" />
                  <FormControlLabel value="Car" control={<Radio />} label="Car" />
                  <FormControlLabel value="Three Wheeller" control={<Radio />} label="Three Wheeller" />
                  <FormControlLabel value="Van"  control={<Radio />} label="Van" />
                </RadioGroup>
           </FormControl>

            <br/>
                <Button
                href="/GeoLocation"
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                startIcon={<SaveIcon />}
                style={{backgroundColor:"goldenrod",color:"black" ,}}
                onClick={this.handleSubmit} 
                >
                NEXT
                </Button>


                <Button  
                variant="contained"
                color="primary" 
                href="/" 
                style={{backgroundColor:"Crimson",color:"gold",marginLeft:0}}
                >
                <ArrowBackIcon/>
                Cancel
                </Button>


                <br/>

                <strong>{this.state.message}</strong>
      </form>
      </Paper>
      
      <br/>
                  
</div>);   
         
}
}