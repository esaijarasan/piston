import React from 'react';
// import PhoneInput from 'react-phone-number-input'
import { Input, FormControl, TextField, MenuItem, InputAdornment, Card, Button, OutlinedInput,Typography, InputLabel, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {AppBar,Toolbar } from '@material-ui/core'
// import Authservice from './Authservice';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import serviceproviderService from '../service/serviceproviderService';



class AddService extends React.Component {
 constructor(props) {
    super(props);
    this.state=this.inputs
    this.state = {
      vehicleTypes:[],
      serviceType:[],
      message: null
 
 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
      this.handleserviceChange=this.handleserviceChange.bind(this);

  }

  inputs={
   companyName:'',phoneNumber:'',emailAddress:'',address:'',workDistance:'',latitude:'',longtitude:'',opentime:'',finishtime:'',description:''
    };

    handleInputChange(e) {
      const target = e.target;
      var value = e.target.value;
      
      if(e.target.checked){
          this.state.vehicleTypes[e.target.value] = e.target.value;   
      }else{
          this.state.vehicleTypes.splice(e.target.value, 1);
      }
      
  }

  handleserviceChange(e) {
    const target = e.target;
    var value = e.target.value;
    
    if(e.target.checked){
        this.state.serviceType[e.target.value] = e.target.value;   
    }else{
        this.state.serviceType.splice(e.target.value, 1);
    }
    
}


// componentDidMount(){
//   this.reloadFeedbackList();
//   }

//   reloadservicestationList = () => {
//   AuthService.getallservicestation()
//      .then((Response) => {
//      this.setState({servicestationArr:Response.data})
//      })
//   }


  addservicestation = () => {
    window.localStorage.removeItem("id");
    this.props.history.push('/servicestation');
  }


  handleChange(event) {
  
  
    this.setState({[event.target.name]:event.target.value
      
    });

  }

  handleSubmit(event) {
 event.preventDefault();




const input ={
  
  companyName:this.state.companyName,
  phoneNumber:this.state.phoneNumber,
  emailAddress:this.state.emailAddress,
  address:this.state.address,
  workDistance:this.state.workDistance,
  latitude:this.state.latitude,
  longtitude:this.state.longtitude,
  opentime:this.state.opentime,
  finishtime:this.state.finishtime,
  description:this.state.description,
  serviceType:this.state.serviceType,
  vehicleTypes:this.state.vehicleTypes,
 
}



serviceproviderService.addServicestation(input)
 .then(res => {
   console.log(res);
     this.setState({message : 'User added successfully.'});
     this.props.history.push('/Create');
 });
        alert(' submited');

    }

  

  

  


    
  render() {
  
    const mystyle = {
      fontFamily: "Arial",
      backgroundColor:"transparent",
      };

    const style = {
      root:{
       
        marginLeft:65,
        width:1150,
        height:820,
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
            required
              type="text" 
              name="companyName"
              value={this.state.companyName}
              onChange={this.handleChange}
              placeholder="Enter Companyname" 
              id="companyName" />
              
          </div> 
          </Grid>

         


<Grid item xs={4}>
              <div>
<InputLabel style={{color:"black"}} for="Address"><b>Address:</b></InputLabel>
<OutlinedInput
required
  type="text" 
  value={this.state.address}
  onChange={this.handleChange}
  placeholder="Enter Address" 
  name="address"
  id="address" />

</div>
</Grid>

<Grid item xs={4}>
              <div>
<InputLabel style={{color:"black"}} for="phonenumber"><b>phonenumber:</b></InputLabel>
<OutlinedInput
required
  type="number" 
  value={this.state.phoneNumber}
  onChange={this.handleChange}
  placeholder="Enter phonenumber" 
  name="phoneNumber"
  id="phonenumber" />

</div>
</Grid>


<Grid item xs={4}>
<div >
<InputLabel style={{color:"black"}} for="Description">Description:</InputLabel>
<OutlinedInput
  type="text" 
  name="description"
  value={this.state.description}
  onChange={this.handleChange} 
  placeholder="Enter Description" 
  id="description" />
 
</div>
</Grid>



<Grid item xs={4}>
              <div>
<InputLabel style={{color:"black"}} for="latitude"><b>Latitude:</b></InputLabel>
<OutlinedInput
  type="number" 
  required
  value={this.state.latitude}
  onChange={this.handleChange}
  placeholder="Enter Latitude" 
  name="latitude"
  id="latitude" />
 
</div>
</Grid>

<Grid item xs={4}>
<div >
<InputLabel style={{color:"black"}} for="WorkDistance">Workdistance:</InputLabel>
<OutlinedInput
required
name="workDistance"
  type="number" 
  endAdornment={
    <InputAdornment position="end">
  KM
    </InputAdornment>}
  value={this.state.workDistance}
  onChange={this.handleChange}
  placeholder="Enter Workdistance" 
  id="workDistance" 
  name="workDistance"/>
  
</div>
</Grid>


          <Grid item xs={4}>
          <div >
     <InputLabel style={{color:"black"}} for="email">Email Address:</InputLabel>
      <OutlinedInput 
      name="emailAddress"
      required
              type="email" 
              value={this.state.emailAddress}
              onChange={this.handleChange}
              placeholder="Enter email" 
              id="email" 
              name="emailAddress"/>
             
          </div>
          </Grid>



     <Grid item xs={4}> 
     <div>
     <InputLabel style={{color:"black"}} for="Opentime">Opentime:</InputLabel>
                                  
                                  <OutlinedInput 
                                  required

style={{color:"black"}}
        id="opentime"
        label="Opentime"
        name="opentime"
        value={this.state.opentime}
        onChange={this.handleChange}
        type="time"
             
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />      
  
 </div>
 </Grid>

                               <Grid item xs={4}>
                               <div>                        
                               <InputLabel style={{color:"black"}} for="finishtime">Finishtime:</InputLabel>     
                                  <OutlinedInput 
        id="finishtime"
        label="Finishtime"
        value={this.state.finishtime}
        onChange={this.handleChange}
        type="time"
       
      name="finishtime"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
                                                        
         </div>
         </Grid>

         <Grid item xs={4}>      
<div>
<h3 component="object"style={{color:"darkcyan" }}><b>Choose Your vehicleType</b></h3>
<FormControl  component="fieldset" value={this.state.vehicleTypes} onChange={this.handleInputChange}>
                
                <p>
                 <input  type="checkbox"  id="vehicle1" value={1}   /> <FormLabel  for="vehicle1">MotorBike</FormLabel> 
                </p>
                <p>
                  <input  type="checkbox"  id="vehicle2" value={2}   /> <FormLabel  for="vehicle2">Car</FormLabel>
                </p>                 
                <p>
                   <input  type="checkbox"  id="vehicle3" value={3}  /> <FormLabel  for="vehicle3">Van</FormLabel> 
                </p>                  
                <p>              
                 <input  type="checkbox"  id="vehicle4" value={4}   /><FormLabel  for="vehicle3">ThreeWheeler</FormLabel>
                  </p>                  
                                
                
           </FormControl>
      
     </div> 
     </Grid> 


     <Grid item xs={4}>      
<div>
<h3 style={{color:"darkcyan" }}><b>Choose Your ServiceType</b></h3>
<FormControl  component="fieldset"onChange={this.handleserviceChange} value={this.state.serviceType}>
                
                <p>
                 <input  type="checkbox"  id="1" value={1}  /> <FormLabel  for="1">TyreRepair</FormLabel> 
                </p>
                <p>
                  <input  type="checkbox"  id="2" value={2} /> <FormLabel  for="2">MechanicService</FormLabel>
                </p>                 
                <p>
                   <input  type="checkbox"  id="3" value={3}  /> <FormLabel  for="3">BodywashService</FormLabel> 
                </p>                  
                                 
                                
                
           </FormControl>
      
     </div> 
     </Grid> 

            <Grid item xs={4}>
              <div>
<InputLabel style={{color:"black"}} for="Longitude"><b>Longtitude:</b></InputLabel>
<OutlinedInput
  type="number" 
  value={this.state.longtitude}
  onChange={this.handleChange}
  placeholder="Enter Longtitude" 
  name="longtitude"
  id="longtitude" />
 
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
     
  
          
  </div>

</form>

    );

  }

}

  

export default AddService;