

import React from 'react';
import PhoneInput from 'react-phone-number-input'
import { Input, FormControl, TextField, MenuItem, InputAdornment, Card, Button, OutlinedInput,Typography, InputLabel, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {AppBar,Toolbar } from '@material-ui/core'
import FooterXXX from './Footer';







class Create extends React.Component {
 constructor() {
    super();
    this.state = {
 input: {},
 errors: {}
 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeUpdatePhone=()=>{
    this.setState({
      Phone:this.state.Phone,
    })
}
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
 event.preventDefault();

 if(this.validate()){
console.log(this.state);

  
        let input = {};
input["Companyname"] = "";
input["Phone"] = "";
input["email"] = "";
input["password"] = "";
input["confirm_password"] = "";
input["Vehicle"] = "";
input["Service"] = "";
input["Address"] = "";
input["Workdistance"] = 0;
input["Description"] = "";
input["Opentime"] = 0;
input["Finishtime"] = 0;
input["Price"] = 0;

 this.setState({input:input});


        alert(' submited');

    }

  }

  

  validate(){

      let input = this.state.input;
      let errors = {};
      let isValid = true;

  

      if (!input["Price"]) {
        isValid = false;
 errors["Price"] = "Please enter your Price.";
      }


      if (!input["Opentime"]) {
        isValid = false;
        errors["Opentime"] = "Please enter your Opentime.";
      }


      if (!input["Finishtime"]) {
        isValid = false;
        errors["Finishtime"] = "Please enter your Finishtime.";
      }

      if (!input["Companyname"]) {
        isValid = false;
        errors["Companyname"] = "Please enter your Companyname.";
      }

      if (!input["Address"]) {
        isValid = false;
        errors["Address"] = "Please enter your Address.";
      }

      if (!input["Phone"]) {
        isValid = false;
        errors["Phone"] = "Please enter your Phone.";
      }

      if (!input["Vehicle"]) {
        isValid = false;
        errors["Vehicle"] = "Please enter your Vehicle.";

      }

      if (!input["Service"]) {
        isValid = false;
        errors["Service"] = "Please enter your Service.";
      }

      if (!input["Workdistance"]) {
        isValid = false;
        errors["Workdistance"] = "Please enter your Workdistance.";
      }

      if (!input["Description"]) {
        isValid = false;
        errors["Description"] = "Please enter your Description.";
      }


      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }

  
      if (typeof input["email"] !== "undefined") {  
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
isValid = false;
          errors["email"] = "Please enter valid email address.";
       
        }
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }

      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";

      }

      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        if (input["password"] != input["confirm_password"]) {
isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 

      this.setState({
        errors: errors
      });
      return isValid;
  }

    
  render() {
    const Vehicle = [
      {
        value: 'Car',
        label: 'Car',
      },
      {
        value: 'MotorBike',
        label: 'MotorBike',
      },
      {
        value: 'Van',
        label: 'Van',
      },
      {
        value: 'Heavy Vehicle',
        label: 'Heavy Vehicle',
      },
    ];

    const Service = [
      {
        value: 'Water Service',
        label: 'Water Service',
      },
      {
        value: 'Oil Service',
        label: 'Oil Service',
      },
      {
        value: 'Mechanic Service',
        label: 'Mechanic Service',
      },
      {
        value: 'Puncher Repair',
        label: 'Puncher Repair',
      },
    ];
    const mystyle = {
      fontFamily: "Arial",
      backgroundColor:"transparent",
      };

    const style = {
      root:{
        // color:"white",
        marginLeft:65,
        width:1150,
        height:420,
      //   backgroundImage:
      // 'linear-gradient( 166deg, rgb(101,203,240) 50%, rgb(101,203,240) 50%, rgb(101,203,240) 50%)',
      backgroundColor:"gold",
      padding:30,
      marginTop:0,
          
          color:"black",
          borderRadius:0,
  
      }
    }

    return (
    


<form onSubmit={this.handleSubmit}>
      
      <div className="love">
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
                        <Button  variant="contained"  href="/Profile"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Profile</Button>
                        </Grid>
                        <Grid item xs={1} >
                        <Button  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>




  <h1 style={{marginLeft:350, color:"black" }}>Add New Service station</h1>

<Card style={style.root} >
            <CardActionArea>
                    <CardMedia
                       
                         image="https://i.pinimg.com/originals/fe/8d/2b/fe8d2b10fc2de1b5444a43d8464a6803.jpg"
                          title="vehicle service "
                      />
                      
                 
                </CardActionArea>
              <CardActions>

              <Grid container spacing={3}>
              <Grid item xs={4}>
<div >
<InputLabel style={{color:"black"}} for="Companyname"><b>Companyname:</b></InputLabel>
            <OutlinedInput
              type="text" 
              name="Companyname"
              value={this.state.input.Companyname}
              onChange={this.handleChange}
              placeholder="Enter Companyname" 
              id="name" />
              <div style={{color:"red"}}>{this.state.errors.Companyname}</div>
          </div> 
          </Grid>



<Grid item xs={4}>
              <div>
<InputLabel style={{color:"black"}} for="Address"><b>Address:</b></InputLabel>
<OutlinedInput
  type="text" 
  value={this.state.input.Address}
  onChange={this.handleChange}
  placeholder="Enter Address" 
  name="Address"
  id="Address" />
 <div style={{color:"red"}}>{this.state.errors.Address}</div>
</div>
</Grid>




<Grid item xs={4}>
<div >
<InputLabel style={{color:"black"}} for="Description">Description:</InputLabel>
<OutlinedInput
  type="text" 
  name="Description"
  value={this.state.input.Description}
  onChange={this.handleChange} 
  placeholder="Enter Description" 
  id="Description" />
  <div style={{color:"red"}}>{this.state.errors.Description}</div>
</div>
</Grid>



<Grid item xs={4}>
<div>
<InputLabel style={{color:"black"}} for="Price">Price:</InputLabel>
<OutlinedInput
 name="Price"
startAdornment={
  <InputAdornment position="start">
Rs.
  </InputAdornment>}
  type="number" 
  value={this.state.input.Price}
  onChange={this.handleChange}
  placeholder="Enter Price" 
  id="Price" />
  <div style={{color:"red"}}>{this.state.errors.Price}</div>
</div>
</Grid>
<Grid item xs={4}>
<div >
<InputLabel style={{color:"black"}} for="Workdistance">Workdistance:</InputLabel>
<OutlinedInput
name="Workdistance"
  type="number" 
  endAdornment={
    <InputAdornment position="end">
  KM
    </InputAdornment>}
  value={this.state.input.Workdistance}
  onChange={this.handleChange}
  placeholder="Enter Workdistance" 
  id="Workdistance" />
  <div style={{color:"red"}}>{this.state.errors.Workdistance}</div>
</div>
</Grid>


          <Grid item xs={4}>
          <div >
     <InputLabel style={{color:"black"}} for="email">Email Address:</InputLabel>
      <OutlinedInput 
      name="email"
              type="text" 
              value={this.state.input.email}
              onChange={this.handleChange}
              placeholder="Enter email" 
              id="email" />
              <div style={{color:"red"}}>{this.state.errors.email}</div>
          </div>
          </Grid>

          <Grid item xs={4}>
          <div>
          <PhoneInput style={{height:80,width:80}}
          name="Phone"
      placeholder="Enter phone number"
      value={this.state.input.Phone}
      onChange={this.onChangeUpdatePhone}/>
      
</div>
</Grid>


     <Grid item xs={4}> 
     <div>
 <FormControl variant="outlined" >
                                  
                                  <TextField

style={{color:"black"}}
        id="Opentime"
        label="Opentime"
        name="Opentime"
        value={this.state.input.Opentime}
        onChange={this.handleChange}
        type="time"
        defaultValue="07:30"     
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />      
  </FormControl> 
 </div>
 </Grid>

 




 

                               <Grid item xs={4}>
                               <div>                        
 <FormControl style={{color:"black"}} variant="outlined" >       
                                  <TextField
        id="Finishtime"
        label="Finishtime"
        value={this.state.input.Finishtime}
        onChange={this.handleChange}
        type="time"
        defaultValue="06:00"
      name="Finishtime"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      ></TextField>
                                  
                              </FormControl>
                              
                              
         </div>
         </Grid>

         <Grid item xs={4}>      
<div>
    <TextField name="Service" id="Service" select label="Service" value={this.state.input.Service } onChange={this.handleChange} helperText="Please select your Service" > 
     {Service.map((option) => ( <MenuItem key={option.value} value={option.value}> {option.label} 
       </MenuItem> ))} 
     </TextField>
       <div style={{color:"red"}}>{this.state.errors.Service}</div>
     </div> 
     </Grid> 


         <Grid item xs={4}>
         <div>
                                 <FormControl style={{color:"black"}} variant="outlined" >
            <TextField name="Vehicle"id="Vehicle" select label="Vehicle" value={this.state.input.Vehicle} onChange={this.handleChange } helperText="Please select your Vehicle" > 
            {Vehicle.map((option) => ( <MenuItem key={option.value} value={option.value}> {option.label} 
            </MenuItem> ))} 
            </TextField>
            <div style={{color:"red"}}>{this.state.errors.Vehicle}</div>
            </FormControl>                                                
            </div> 
            </Grid>



           
          
            <Grid item xs={4}>
            <div >

<Button style={{backgroundColor:"green", color:"black" ,width:200 }} variant="contained" color="primary" type="submit" value="Submit"    >Submit</Button>  
  </div> 
          

  </Grid>




                               </Grid>
             </CardActions>
            </Card>













      


       







         

         






     


  

          
             
  

         
          <FooterXXX/>
          
  </div>

</form>

    );

  }

}

  

export default Create;