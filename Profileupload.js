import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import {AppBar,Toolbar,  Paper, } from '@material-ui/core'

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import car from '/home/sinthujan/Desktop/piston_team/src/Piston/pexels-eberhard-grossgasteiger-1366919.jpg'
import { FormControl, OutlinedInput } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';

const mystyle = {
  fontFamily: "Arial",
  backgroundColor:"transparent",
  color:"black",
  
  };



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
 
  input: {
    display: 'none',
  },
 
}));


function Profileupload() {
  const classes = useStyles();
const [state]=React.useState(localStorage.getItem('username'))
  return (

    <div>
  
  
  <div className={classes.rootbar}>
<AppBar position="static" style={{height:"7%",width:"99%",}} >

  <Typography  variant="h6"style={{textAlign:"center", backgroundColor:"gold", color:"black"}} >
   Profile-{state}
  </Typography>
</AppBar>
</div>



 <Card style={{marginTop:"5%",marginLeft:"2%",width:"100%" ,height:"100%",}}>
      
        
        {/* <CardContent>  */}
        
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <div className={classes.root}>
      <UploadPreview />
      </div> 
     
      
          </Typography>
          {/* </CardContent> */}
    
     
    </Card>  
    </div>





     
   
  );
}

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
    this.state={
      firstNameEdite:false,
      lastNameEdite:false,
      emailEdite:false,
      phoneEdite:false,
      addressEdite:false,
      open:false,
      updateFirstName:localStorage.getItem('first_name'),
      updateLastName:localStorage.getItem('last_name'),
      updateEmail:localStorage.getItem('email'),
      updatePhone:localStorage.getItem('phone'),
      updateAddress:localStorage.getItem('address'),

      username:localStorage.getItem('username'),
      email:localStorage.getItem('email'),
      id:localStorage.getItem('id'),
      roles:localStorage.getItem('roles'),
      first_name:localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      address: localStorage.getItem('address'),
      phone:localStorage.getItem('phone'),
  }

};
handleClickClose = () => {
  this.setState({
    open:false,
  }
    );
};

editeFirstName=()=>{
  this.setState({
    firstNameEdite:true,
  })
}

onChangeUpdateFirstName=(e)=>{
  this.setState({
    updateFirstName:e.target.value,
  })
}

editeFirstNameCancel=()=>{
  this.setState({
      updateFirstName:localStorage.getItem('first_name'),
    firstNameEdite:false,
  })
}

editeFirstNameUpdate=()=>{
  this.setState({
      first_name:this.state.updateFirstName,

    firstNameEdite:false,
  })
  localStorage.setItem('first_name', this.state.updateFirstName);
}
//profile_name edite end


//profile last_name edite start
editeLastName=()=>{
  this.setState({
    lastNameEdite:true,
  })
}

onChangeUpdateLastName=(e)=>{
  this.setState({
    updateLastName:e.target.value,
  })
}

editeLastNameCancel=()=>{
  this.setState({
      updateLastName:localStorage.getItem('last_name'),
    lastNameEdite:false,
  })
}

editeLastNameUpdate=()=>{
  this.setState({
      last_name:this.state.updateLastName,

    lastNameEdite:false,
  })
  localStorage.setItem('last_name', this.state.updateLastName);
}

editeEmail=()=>{
  this.setState({
    emailEdite:true,
  })
}

onChangeUpdateEmail=(e)=>{
  this.setState({
    updateEmail:e.target.value,
  })
}

editeEmailCancel=()=>{
  this.setState({
      updateEmail:localStorage.getItem('email'),
    emailEdite:false,
  })
}

editeEmailUpdate=()=>{
  this.setState({
      email:this.state.updateEmail,

    emailEdite:false,
  })
  localStorage.setItem('email', this.state.updateEmail);
}

editePhone=()=>{
  this.setState({
    phoneEdite:true,
  })
}

onChangeUpdatePhone=(e)=>{
  this.setState({
    updatePhone:e.target.value,
  })
}

editePhoneCancel=()=>{
  this.setState({
      updatePhone:localStorage.getItem('phone'),
    phoneEdite:false,
  })
}

editePhoneUpdate=()=>{
  this.setState({
      phone:this.state.updatePhone,

    phoneEdite:false,
  })
  localStorage.setItem('phone', this.state.updatePhone);
}

editeAddress=()=>{
  this.setState({
    addressEdite:true,
  })
}

onChangeUpdateAddress=(e)=>{
  this.setState({
    updateAddress:e.target.value,
  })
}

editeAddressCancel=()=>{
  this.setState({
      updateAddress:localStorage.getItem('address'),
    addressEdite:false,
  })
}

editeAddressUpdate=()=>{
  this.setState({
      address:this.state.updateAddress,

    addressEdite:false,
  })
  localStorage.setItem('address', this.state.updateAddress);
}




  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  onSubmit(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  // lightblue url("img_tree.gif") no-repeat fixed center
  render() {
    return (
    <div className="sinth">
      <div >
      <Card style={{width:"250px",height:"300px",marginLeft:"2%",marginTop:"7%", backgroundColor:"transparent"}}>
                    <CardContent>
 <Avatar style={{ width: "150px" ,height:"150px"}} src={this.state.file} />
 <label htmlFor="uploadfile">
 <Button variant="contained" color="primary" style={{backgroundColor:"black"}} component="span" onChange={this.onChange}>
<AddAPhotoIcon style={{backgroundColor:"black" ,color:"gold"}}/>
</Button>
<input  type="file" accept="image/*"id="uploadfile" onChange={this.onChange} hidden />
</label>

{this.state.file && (
          <div style={{textAlign:"center",margin:"10px"}}>
<Alert severity="success">Success Full Update!</Alert>
             </div>
        )}
                </CardContent>
                </Card>
</div>


<div>
<div style={{display:"flex",marginLeft:"2%",marginTop:"1%"}} >

<Grid container spacing={3}>
<Grid item xs={4}>
                    <Card style={{width:"250px",height:"160px", backgroundColor:"transparent" }}>
                    <CardContent>
                          <Typography style={{display:"flex"}}variant="h6" >
                          <h4><TextField id="FirstName" label="FirstName" style={{marginLeft:"2%"}} disabled variant="outlined" value={this.state.updateFirstName}
                                      onChange={this.onChangeUpdateFirstName}/><CardContent><Button variant="contained" style={{backgroundColor:"blue"}} color="primary" onClick={this.editeFirstName}><EditIcon/></Button></CardContent></h4>
                          
                          </Typography>
                          </CardContent>
                     
                        {this.state.firstNameEdite &&(
                          

                          <Dialog
                          open={this.editeFirstName}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your First Name"}</DialogTitle>
                  <DialogContent>
                          
                            {this.state.firstNameEdite &&(
                              <FormControl variant="outlined" >
                                  <InputLabel htmlFor="FirstName">First Name</InputLabel>
                                  <OutlinedInput
                                      id="FirstName"
                                      value={this.state.updateFirstName}
                                      onChange={this.onChangeUpdateFirstName}
                                      label="First Name"
                                  />
                              </FormControl>
                          )}
                            
                          </DialogContent>
                          <DialogActions>
                            <Button style={{backgroundColor:"tomato", color:"black"}} onClick={this.editeFirstNameCancel} color="primary">
                              Cancel
                            </Button>
                            <Button  style={{backgroundColor:"green", color:"black"}} onClick={this.editeFirstNameUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                          </DialogActions>
                        </Dialog>
                        )}
                    </Card>
                    </Grid>
 <Grid item xs={4}>

            
            <Card style={{width:"250px",height:"160px" ,backgroundColor:"transparent" }}>
            <CardContent>
                  <Typography style={{display:"flex"}}variant="h6" >
                  <h4><TextField id="Lastname" label="LastName" style={{marginLeft:"2%"}} disabled variant="outlined" value={this.state.updateLastName}
                              onChange={this.onChangeUpdateLastName}/><CardContent><Button variant="contained" style={{backgroundColor:"blue"}} color="primary" onClick={this.editeLastName}><EditIcon/></Button></CardContent></h4>
                  
                  </Typography>
                  </CardContent>
             
                {this.state.lastNameEdite &&(
                  

                  <Dialog
                  open={this.editeLastName}
                  onClose={this.handleClickClose}
                  
                >
                  <DialogTitle >{"Edit Your Last Name"}</DialogTitle>
                  <DialogContent>
                   
                    {this.state.lastNameEdite &&(
                      <FormControl variant="outlined" >
                          <InputLabel htmlFor="Lastname" >Last Name</InputLabel>
                          <OutlinedInput
                              id="Lastname"
                              value={this.state.updateLastName}
                              onChange={this.onChangeUpdateLastName}
                              label="Last Name"
                          />
                      </FormControl>
                  )}
                   
                  </DialogContent>
                  <DialogActions>
                    <Button style={{backgroundColor:"tomato", color:"black"}} onClick={this.editeLastNameCancel} color="primary">
                      Cancel
                    </Button>
                    <Button style={{backgroundColor:"green", color:"black"}} onClick={this.editeLastNameUpdate} color="primary" autoFocus>
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>
                )}
            </Card>
</Grid>
<Grid item xs={4}>
            <Card style={{width:"250px",height:"160px", backgroundColor:"transparent"}}>
            <CardContent>
                  <Typography style={{display:"flex"}}variant="h6" >
                  <h4><TextField  id="email" label="Email" style={{marginLeft:"2%"}} disabled variant="outlined" value={this.state.updateEmail}
                              onChange={this.onChangeUpdateEmail}/><CardContent><Button variant="contained" style={{backgroundColor:"blue"}} color="primary" onClick={this.editeEmail}><EditIcon/></Button></CardContent></h4>
                  
                  </Typography>
                  </CardContent>
             
                {this.state.emailEdite &&(
                  

                  <Dialog
                  open={this.editeEmail}
                  onClose={this.handleClickClose}
                
                >
                  <DialogTitle >{"Edit Your Email"}</DialogTitle>
                  <DialogContent>
                    
                    {this.state.emailEdite &&(
                      <FormControl variant="outlined" >
                          <InputLabel htmlFor="email">Email</InputLabel>
                          <OutlinedInput
                              id="email"
                              value={this.state.updateEmail}
                              onChange={this.onChangeUpdateEmail}
                              label="Email"
                              type="email"
                          />
                      </FormControl>
                  )}
                  
                  </DialogContent>
                  <DialogActions>
                    <Button style={{backgroundColor:"tomato", color:"black"}} onClick={this.editeEmailCancel} color="primary">
                      Cancel
                    </Button>
                    <Button style={{backgroundColor:"green", color:"black"}} onClick={this.editeEmailUpdate} color="primary" autoFocus>
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>
                )}
            </Card>
            </Grid>
                </Grid> 


</div>
<div style={{display:"flex",marginLeft:"12%",marginTop:"2%"}}>











<Grid container spacing={11}>
<Grid item xs={6}>
                    <Card style={{width:"250px",height:"160px" ,backgroundColor:"transparent"}}>
                    <CardContent>
                          <Typography style={{display:"flex"}}variant="h6" >
                          <h4><TextField  id="Phonenumber" label="PhoneNumber" style={{marginLeft:"2%"}} disabled variant="outlined" value={this.state.updatePhone}
                                      onChange={this.onChangeUpdatePhone}/><CardContent><Button variant="contained" style={{backgroundColor:"blue"}} color="primary" onClick={this.editePhone}><EditIcon/></Button></CardContent></h4>
                          
                          </Typography>
                          </CardContent>
                     
                        {this.state.phoneEdite&&(
                          

                          <Dialog
                          open={this.editePhone}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your PhoneNumber"}</DialogTitle>
                  <DialogContent>
                          
                            {this.state.phoneEdite &&(
                              <FormControl variant="outlined" >
                                  <InputLabel htmlFor="Phonenumber">PhoneNumber</InputLabel>
                                  <OutlinedInput
                                      id="Phonenumber"
                                      value={this.state.updatePhone}
                                      onChange={this.onChangeUpdatePhone}
                                      label="Phone Number"
                                      type="number"
                                  />
                              </FormControl>
                          )}
                            
                          </DialogContent>
                          <DialogActions>
                            <Button style={{backgroundColor:"tomato", color:"black"}} onClick={this.editePhoneCancel} color="primary">
                              Cancel
                            </Button>
                            <Button  style={{backgroundColor:"green", color:"black"}} onClick={this.editePhoneUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                          </DialogActions>
                        </Dialog>
                        )}
                    </Card>
                    </Grid>
 <Grid item xs={6}>

            
            <Card style={{width:"250px",height:"160px" ,backgroundColor:"transparent"}}>
            <CardContent>
                  <Typography style={{display:"flex"}}variant="h6" >
                  <h4><TextField id="address" label="Address" style={{marginLeft:"2%",}} disabled variant="outlined" value={this.state.updateAddress}
                              onChange={this.onChangeUpdateAddress}/><CardContent><Button variant="contained" style={{backgroundColor:"blue"}} color="primary" onClick={this.editeAddress}><EditIcon/></Button></CardContent></h4>
                  
                  </Typography>
                  </CardContent>
             
                {this.state.addressEdite &&(
                  

                  <Dialog
                  open={this.editeAddress}
                  onClose={this.handleClickClose}
                  
                >
                  <DialogTitle style={{backgroundImage:"inherit"}} >{"Edit Your Address"}</DialogTitle>
                  <DialogContent>
                   
                    {this.state.addressEdite &&(
                      <FormControl variant="outlined"  id="address">
                          <InputLabel htmlFor="address" >Address</InputLabel>
                          <OutlinedInput
                              id="address"
                              value={this.state.updateAddress}
                              onChange={this.onChangeUpdateAddress}
                              label="Address"
                          />
                      </FormControl>
                  )}
                   
                  </DialogContent>
                  <DialogActions>
                    <Button style={{backgroundColor:"tomato", color:"black"}} onClick={this.editeAddressCancel} color="primary">
                      Cancel
                    </Button>
                    <Button  style={{backgroundColor:"green", color:"black"}} onClick={this.editeAddressUpdate} color="primary" autoFocus>
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>
                )}
            </Card>
</Grid>

                </Grid> 



        </div>



</div>

        
        
      </div>
    );
  }
}

 export default Profileupload