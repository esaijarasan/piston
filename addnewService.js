
import React,{Component} from 'react';
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText, OutlinedInput ,Select } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton ,Divider,Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FooterXXX from './Footer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

// import EditIcon from '@material-ui/icons/Edit';

const mystyle = {
    fontFamily: "Arial",
    backgroundColor:"transparent",
    color:"black"
    };


export default class Newservice extends Component {
  constructor(props){
    super(props);
    this.state={
      fileedit:false,
      Companynameedit:false,
     Serviceedit:false,
     Vehicleedit:false,
      Priceedit:false,
      Phoneedit:false,
      Addressedit:false,
      Workdistanceedit:false,
      Descriptionedit:false,
      Opentimeedit:false,
      Finishtimeedit:false,




      updatefile:localStorage.getItem ('file'),
      updateCompanyname:localStorage.getItem('Companyname'),
      updateService:localStorage.getItem('Service'),
      updateVehicle:localStorage.getItem('Vehicle'),
      updatePhone:localStorage.getItem('Phone'),
      updateAddress:localStorage.getItem('Address'),
      updateWorkdistance:localStorage.getItem('Workdistance'),
      updateDescription:localStorage.getItem('Description'),
      updatePrice:localStorage.getItem('Price'),
 updateOpentime:localStorage.getItem('Opentime'),
 updateFinishtime:localStorage.getItem('Finishtime'),

 fileo:localStorage.getItem('file'),
      Companyname:localStorage.getItem('Companyname'),
      Service:localStorage.getItem('Service'),
      Phone:localStorage.getItem('Phone'),
    Address:localStorage.getItem('Address'),
     Workdistance:localStorage.getItem('Workdistance'),
      Description:localStorage.getItem('Description'),
     Price:localStorage.getItem('Price'),
     Vehicle:localStorage.getItem('Vehicle'),
     Opentime:localStorage.getItem('Opentime'),
     Finishtime:localStorage.getItem('Finishtime'),

      Id:localStorage.getItem('Id'),
      Roles:localStorage.getItem('Roles'),
    };
  }
  handleClickClose = () => {
    this.setState({
      open:false,
    }
      )}

  // refreshPage=()=>{
  //   window.location.reload(false);
  // }


  editfile=()=>{
    this.setState({
      fileedit:true,
    })
}

onChangeUpdatefile=(e)=>{
    this.setState({
      updatefile: URL.createObjectURL(e.target.files[0]),
    })
}

editfileCancel=()=>{
    this.setState({
        updatefile:localStorage.getItem('file'),
        fileedit:false,
    })
}

editfileUpdate=()=>{
    this.setState({
      fileo:this.state.updatefile,

      fileedit:false,
    })
    localStorage.setItem('file', this.state.updatefile)
}





  editOpentime=()=>{
    this.setState({
      Opentimeedit:true,
    })
}

onChangeUpdateOpentime=(e)=>{
    this.setState({
      updateOpentime:e.target.value,
    })
}

editOpentimeCancel=()=>{
    this.setState({
        updateOpentime:localStorage.getItem('Opentime'),
        Opentimeedit:false,
    })
}

editOpentimeUpdate=()=>{
    this.setState({
      Opentime:this.state.updateOpentime,

      Opentimeedit:false,
    })
    localStorage.setItem('Opentime', this.state.updateOpentime)
}






  editFinishtime=()=>{
    this.setState({
      Finishtimeedit:true,
    })
}

onChangeUpdateFinishtime=(e)=>{
    this.setState({
      updateFinishtime:e.target.value,
    })
}

editFinishtimeCancel=()=>{
    this.setState({
        updateFinishtime:localStorage.getItem('Finishtime'),
        Finishtimeedit:false,
    })
}

editFinishtimeUpdate=()=>{
    this.setState({
      Finishtime:this.state.updateFinishtime,

      Finishtimeedit:false,
    })
    localStorage.setItem('Finishtime', this.state.updateFinishtime)
}








  editVehicle=()=>{
    this.setState({
      Vehicleedit:true,
    })
}

onChangeUpdateVehicle=(e)=>{
    this.setState({
      updateVehicle:e.target.value,
    })
}

editVehicleCancel=()=>{
    this.setState({
        updateVehicle:localStorage.getItem('Vehicle'),
        Vehicleedit:false,
    })
}

editVehicleUpdate=()=>{
    this.setState({
      Vehicle:this.state.updateVehicle,

      Vehicleedit:false,
    })
    localStorage.setItem('Vehicle', this.state.updateVehicle)
}




  editPrice=()=>{
    this.setState({
      Priceedit:true,
    })
}

onChangeUpdatePrice=(e)=>{
    this.setState({
      updatePrice:e.target.value,
    })
}

editPriceCancel=()=>{
    this.setState({
        updatePrice:localStorage.getItem('Price'),
        Priceedit:false,
    })
}

editPriceUpdate=()=>{
    this.setState({
      Price:this.state.updatePrice,

      Priceedit:false,
    })
    localStorage.setItem('Price', this.state.updatePrice)
}




  

    editDescription=()=>{
        this.setState({
          Descriptionedit:true,
        })
    }

    onChangeUpdateDescription=(e)=>{
        this.setState({
          updateDescription:e.target.value,
        })
    }

    editDescriptionCancel=()=>{
        this.setState({
            updateDescription:localStorage.getItem('Description'),
            Descriptionedit:false,
        })
    }

    editDescriptionUpdate=()=>{
        this.setState({
          Description:this.state.updateDescription,

          Descriptionedit:false,
        })
        localStorage.setItem('Description', this.state.updateDescription)
    }

    editCompanyname=()=>{
      this.setState({
        Companynameedit:true,
      })
  }

  onChangeUpdateCompanyname=(e)=>{
      this.setState({
        updateCompanyname:e.target.value,
      })
  }

  editCompanynameCancel=()=>{
      this.setState({
          updateCompanyname:localStorage.getItem('Companyname'),
          Companynameedit:false,
      })
  }

  editCompanynameUpdate=()=>{
      this.setState({
        Companyname:this.state.updateCompanyname,

        Companynameedit:false,
      })
      localStorage.setItem('Companyname', this.state.updateCompanyname)
  }



    editWorkdistance=()=>{
        this.setState({
          Workdistanceedit:true,
        })
    }

    onChangeUpdateWorkdistance=(e)=>{
        this.setState({
          updateWorkdistance:e.target.value,
        })
    }

    editWorkdistanceCancel=()=>{
        this.setState({
            updateWorkdistance:localStorage.getItem('Workdistance'),
            Workdistanceedit:false,
        })
    }

    editWorkdistanceUpdate=()=>{
        this.setState({
          Workdistance:this.state.updateWorkdistance,

          Workdistanceedit:false,
        })
        localStorage.setItem('Workdistance', this.state.updateWorkdistance);
    }


    editService=()=>{
        this.setState({
          Serviceedit:true,
        })
    }

    onChangeUpdateService=(e)=>{
        this.setState({
          updateService:e.target.value,
        })
    }

    editServiceCancel=()=>{
        this.setState({
            updateService:localStorage.getItem('Service'),
            Serviceedit:false,
        })
    }

    editServiceUpdate=()=>{
        this.setState({
            Service:this.state.updateService,

            Serviceedit:false,
        })
        localStorage.setItem('Service', this.state.updateService);
    }



//profile phone edite start
    editPhone=()=>{
        this.setState({
          Phoneedit:true,
        })
    }

    onChangeUpdatePhone=(e)=>{
        this.setState({
          updatePhone:e.target.value,
        })
    }

    editPhoneCancel=()=>{
        this.setState({
            updatePhone:localStorage.getItem('Phone'),
            Phoneedit:false,
        })
    }

    editPhoneUpdate=()=>{
        this.setState({
          Phone:this.state.updatePhone,

          Phoneedit:false,
        })
        localStorage.setItem('Phone', this.state.updatePhone);
    }




    editAddress=()=>{
        this.setState({
          Addressedit:true,
        })
    }

    onChangeUpdateAddress=(e)=>{
        this.setState({
          updateAddress:e.target.value,
        })
    }

    editAddressCancel=()=>{
        this.setState({
            updateAddress:localStorage.getItem('Address'),
            Addressedit:false,
        })
    }

    editAddressUpdate=()=>{
        this.setState({
          Address:this.state.updateAddress,

          Addressedit:false,
        })
        localStorage.setItem('Address', this.state.updateAddress);
    }





  render( ){

    const style = {
      root:{
        // color:"white",
        marginLeft:45,
        
        
      //   backgroundImage:
      // 'linear-gradient( 166deg, rgb(101,203,240) 50%, rgb(101,203,240) 50%, rgb(101,203,240) 50%)',
      backgroundColor:"gold",
      padding:30,
      marginTop:10,
      marginRight:30,
          
          color:"black",
          borderRadius:0,
  
      }
    }
    const classes = makeStyles((theme) => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    }));
  
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

    return ( <div
    
    
    
    
    
    
    
    className="addNewservice">
      
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
           <Button  variant="contained" href="/Profile" style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Profile</Button>
           </Grid>
           <Grid item xs={1} >
           <Button  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Logout</Button>
           </Grid>
       </Toolbar>
   </AppBar>

   <h1 style={{marginLeft:350, color:"black" }}>Update Service station</h1>

<div style={{backgroundColor:"transparent",height:"100%"}}>

<Card style={style.root} >
            <CardActionArea>
                    <CardMedia
                       
                         image="https://i.pinimg.com/originals/fe/8d/2b/fe8d2b10fc2de1b5444a43d8464a6803.jpg"
                          title="vehicle service "
                      />
                      
                 
                </CardActionArea>
              <CardActions>



        <Grid container spacing={2}>



        <Grid item xs={4}>
            <Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>
                  <div>
<Typography style={{color:"black"}} variant="h6" id="Companyname"><b>Companyname</b>-{this.state.Companyname} </Typography>

 </div>
 </CardContent>
 
  <Button style={{backgroundColor:"blue",color:"black"}} id="CompanynameEdit" onClick={this.editCompanyname}><EditIcon style={{color:"gold"}} />Edit </Button>
                      
    {this.state.Companynameedit &&(
  

  
                          <Dialog
                          open={this.editCompanyname}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your Companyname"}</DialogTitle>
                  <DialogContent>

                            {this.state.Companynameedit &&(
                              <card>
                              <FormControl variant="outlined" >
                                  <InputLabel htmlFor="Companyname">Companyname</InputLabel>
                                  <OutlinedInput
                                      id="Companyname"
                                      value={this.state.updateCompanyname}
                                      onChange={this.onChangeUpdateCompanyname}
                                      label="Companyname"
                                  />
                                  
                              </FormControl>
                              </card>
                          )}

<Button style={{backgroundColor:"tomato",color:"black"}}
onClick={this.editCompanynameCancel} color="primary">
                              Cancel
                            </Button>
                            <Button  style={{backgroundColor:"gold",color:"black"}} onClick={this.editCompanynameUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                            
                          </DialogContent>
                         
                        </Dialog>
                        
                        )}
                       
                        </Card>
                  </Grid>
                  





     
 {/* <Avatar style={{ width: "150px" ,height:"150px"}} src={this.state.file} />
 <label htmlFor="uploadfile">
 <Button variant="contained" color="primary" component="span" onChange={this.onChangeUpdatef}>
<AddAPhotoIcon/>
</Button>
<input  type="file" accept="image/*"id="uploadfile" onChange={this.onChange} hidden />
</label> */}







<Grid item xs={4}>
                  <Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>

<div>
<Typography style={{color:"black"}} variant="h6" id="Vehicle"><b>Vehicle-</b>{this.state.Vehicle}</Typography>
</div>
</CardContent>
<Button style={{backgroundColor:"blue",color:"white"}} id="VehicleEdit" onClick={this.editVehicle}><EditIcon style={{color:"gold"}} /> Edit </Button>
<br/>
{" "}

    
{this.state.Vehicleedit &&(

        <Dialog
        open={this.editVehicle}
        onClose={this.handleClickClose}
      
      >
      <DialogTitle >{"Edit Your Vehicle"}</DialogTitle>
<DialogContent>

          {this.state.Vehicleedit &&(
            <card>
            <FormControl variant="outlined" >
            <TextField id="Vehicle" select label="Vehicle" value={this.state.onChangeUpdateVehicle} onChange={this.onChangeUpdateVehicle } helperText="Please select your Vehicle" > 
            {Vehicle.map((option) => ( <MenuItem key={option.value} value={option.value}> {option.label} 
            </MenuItem> ))} 
            </TextField>
                
            </FormControl>
            </card>
        )}

<Button style={{backgroundColor:"tomato",color:"black"}} onClick={this.editVehicleCancel} color="primary">
            Cancel
          </Button>
          <Button style={{backgroundColor:"gold",color:"black"}} onClick={this.editVehicleUpdate} color="primary" autoFocus>
            Update
          </Button>
          
        </DialogContent>
       
      </Dialog>
      
      )}
      
    
      </Card>
     </Grid>


































                  













                       <Grid item xs={4}>

                       <Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>        
<div>
<Typography style={{color:"black"}} variant="h6" id="Phone"><b>Phone Number</b>-{this.state.Phone}</Typography>
</div>
</CardContent>
<Button style={{backgroundColor:"blue",color:"black"}} id="PhoneEdit" onClick={this.editPhone}><EditIcon style={{color:"gold"}} />Edit</Button>
    
{this.state.Phoneedit &&(

        <Dialog
        open={this.editPhone}
        onClose={this.handleClickClose}
      
      >
      <DialogTitle >{"Edit Your Phone"}</DialogTitle>
<DialogContent>

          {this.state.Phoneedit &&(
            <card>
            <FormControl variant="outlined" >
                <InputLabel htmlFor="Phone">Phone</InputLabel>
                <OutlinedInput
                endAdornment={<InputAdornment position="end"></InputAdornment>} 
                type="number"
                    id="Phone"
                    value={this.state.updatePhone}
                    onChange={this.onChangeUpdatePhone}
                    label="Phone"
                />
                
            </FormControl>
            </card>
        )}

<Button style={{backgroundColor:"tomato",color:"black"}} onClick={this.editPhoneCancel} color="primary">
            Cancel
          </Button>
          <Button  style={{backgroundColor:"gold",color:"black"}} onClick={this.editPhoneUpdate} color="primary" autoFocus>
            Update
          </Button>
          
        </DialogContent>
       
      </Dialog>
      
      )}
      </Card>
</Grid>


<Grid item xs={4}>
<Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>
                  <div>
<Typography style={{color:"black"}} variant="h6" id="Address"><b>Opentime</b>-{this.state.Opentime}</Typography>
 </div>
 </CardContent>
  <Button style={{backgroundColor:"blue",color:"black"}} id="OpentimeEdit" onClick={this.editOpentime}><EditIcon style={{color:"gold"}} />Edit </Button>
                      
    {this.state.Opentimeedit &&(
  
                          <Dialog
                          open={this.editOpentime}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your Opentime"}</DialogTitle>
                  <DialogContent>

                            {this.state.Opentimeedit &&(
                              <card>
                              <FormControl variant="outlined" >
                                  
                                  <TextField
        id="time"
        label="Opentime"
        value={this.state.updateOpentime}
        onChange={this.onChangeUpdateOpentime}
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
                                  
                              </FormControl>
                              </card>
                          )}

<Button style={{backgroundColor:"tomato",color:"black"}} onClick={this.editOpentimeCancel} color="primary">
                              Cancel
                            </Button>
                            <Button style={{backgroundColor:"gold",color:"black"}} onClick={this.editOpentimeUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                            
                          </DialogContent>
                         
                        </Dialog>
                        
                        )}
                        </Card>
                  </Grid>


                  <Grid item xs={4}>
                  <Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>
                  <div>
<Typography style={{color:"black"}} variant="h6" id="Address"><b>Finishtime</b>-{this.state.Finishtime}</Typography>
 </div>
 </CardContent>
  <Button style={{backgroundColor:"blue",color:"black"}} id="FinishtimeEdit" onClick={this.editFinishtime}><EditIcon style={{color:"gold"}} />Edit </Button>
                      
    {this.state.Finishtimeedit &&(
  
                          <Dialog
                          open={this.editFinishtime}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your Finishtime"}</DialogTitle>
                  <DialogContent>

                            {this.state.Finishtimeedit &&(
                              <card>
                              <FormControl variant="outlined" >
                                  
                                  <TextField
        id="time"
        label="Finishtime"
        value={this.state.updateFinishtime}
        onChange={this.onChangeUpdateFinishtime}
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
                                  
                              </FormControl>
                              </card>
                          )}

<Button style={{backgroundColor:"tomato",color:"black"}} onClick={this.editFinishtimeCancel} color="primary">
                              Cancel
                            </Button>
                            <Button style={{backgroundColor:"gold",color:"black"}} onClick={this.editFinishtimeUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                            
                          </DialogContent>
                         
                        </Dialog>
                        
                        )}
                        </Card>
                  </Grid>





<Grid item xs={4}>
<Card style={{ backgroundColor:"transparent" }}>
                    <CardContent> 
                  <div>
<Typography style={{color:"black"}} variant="h6" id="Price"><b>Price-Rs.</b>{this.state.Price}</Typography>
 </div>
 </CardContent>
  <Button style={{backgroundColor:"blue",color:"black"}} id="PriceEdit" onClick={this.editPrice}> <EditIcon style={{color:"gold"}} />Edit </Button>
                      
    {this.state.Priceedit &&(
  
                          <Dialog
                          open={this.editPrice}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your Price"}</DialogTitle>
                  <DialogContent>

                            {this.state.Priceedit &&(
                              <card>
                              <FormControl variant="outlined" >
                                  <InputLabel htmlFor="Price">Price</InputLabel>
                                  <OutlinedInput
                                  endAdornment={
                                    <InputAdornment position="end">
                                  Rs
                                    </InputAdornment>}
                                    type="number"
                                      id="Price"
                                      value={this.state.updatePrice}
                                      onChange={this.onChangeUpdatePrice}
                                      label="Price"
                                  />
                                  
                              </FormControl>
                              </card>
                          )}

<Button style={{backgroundColor:"tomato",color:"black"}} onClick={this.editPriceCancel } color="primary">
                              Cancel
                            </Button>
                            <Button style={{backgroundColor:"gold",color:"black"}} onClick={this.editPriceUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                            
                          </DialogContent>
                         
                        </Dialog>
                        
                        )}
                        </Card>
                  </Grid>


                  <Grid item xs={4}>
                  <Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>
                  <div>
<Typography style={{color:"black"}} variant="h6" id="Address"><b>Address</b>-{this.state.Address}</Typography>
 </div>
 </CardContent>
  <Button style={{backgroundColor:"blue",color:"black"}} id="AddressEdit" onClick={this.editAddress}> <EditIcon style={{color:"gold"}} />Edit</Button>
                      
    {this.state.Addressedit &&(
  
                          <Dialog
                          open={this.editAddress}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your Address"}</DialogTitle>
                  <DialogContent>

                            {this.state.Addressedit &&(
                              <card>
                              <FormControl variant="outlined" >
                                  <InputLabel htmlFor="Address">Address</InputLabel>
                                  <OutlinedInput
                                      id="Address"
                                      value={this.state.updateAddress}
                                      onChange={this.onChangeUpdateAddress}
                                      label="Address"
                                  />
                                  
                              </FormControl>
                              </card>
                          )}

<Button style={{backgroundColor:"tomato",color:"black"}} onClick={this.editAddressCancel} color="primary">
                              Cancel
                            </Button>
                            <Button style={{backgroundColor:"gold",color:"black"}} onClick={this.editAddressUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                            
                          </DialogContent>
                         
                        </Dialog>
                        
                        )}
                        </Card>
                  </Grid>








                  <Grid item xs={4}>
                  <Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>
                  <div>
<Typography style={{color:"black"}} variant="h6" id="Description"><b>Description-</b>{this.state.Description}</Typography>
 </div>
 </CardContent>
  <Button style={{backgroundColor:"blue",color:"black"}} id="DescriptionEdit" onClick={this.editDescription}> <EditIcon style={{color:"gold"}} />Edit </Button>
                      
    {this.state.Descriptionedit &&(
  
                          <Dialog
                          open={this.editDescription}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your Description"}</DialogTitle>
                  <DialogContent>

                            {this.state.Descriptionedit &&(
                              <card>
                              <FormControl variant="outlined" >
                                  
                                  <textarea
                                      label="Description"
                                      value={this.state.updateDescription}
                                      onChange={this.onChangeUpdateDescription}
                                     
                                  />
                                  
                              </FormControl>
                              </card>
                          )}

<Button style={{backgroundColor:"tomato",color:"black"}} onClick={this.editDescriptionCancel} color="primary">
                              Cancel
                            </Button>
                            <Button style={{backgroundColor:"gold",color:"black"}} onClick={this.editDescriptionUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                            
                          </DialogContent>
                         
                        </Dialog>
                        
                        )}
                        </Card>
                  </Grid>






                 
           



         


                  <Grid item xs={4}>

                  <Card style={{ backgroundColor:"transparent" }}>
                    <CardContent>
                  <div>
<Typography style={{color:"black"}} variant="h6" id="Workdistance"><b>Workdistance</b>-{this.state.Workdistance}KM</Typography>
 </div>
 </CardContent>
  <Button style={{backgroundColor:"blue",color:"black"}} id="WorkdistanceEdit" onClick={this.editWorkdistance}><EditIcon style={{color:"gold"}} />Edit </Button>
                      
    {this.state.Workdistanceedit &&(
  
                          <Dialog
                          open={this.editWorkdistance}
                          onClose={this.handleClickClose}
                        
                        >
                        <DialogTitle >{"Edit Your Workdistance"}</DialogTitle>
                  <DialogContent>

                            {this.state.Workdistanceedit &&(
                              <card>
                              <FormControl variant="outlined" >
                                  <InputLabel htmlFor="Workdistance">Workdistance</InputLabel>
                                  <OutlinedInput
                                  endAdornment={<InputAdornment position="end">Km</InputAdornment>} 
                                  type="number"
                                      id="Workdistance"
                                      value={this.state.updateWorkdistance}
                                      onChange={this.onChangeUpdateWorkdistance}
                                      label="Workdistance"
                                  />
                                  
                              </FormControl>
                              </card>
                          )}

<Button  style={{backgroundColor:"tomato",color:"black"}}
 onClick={this.editWorkdistanceCancel} color="primary">
                              Cancel
                            </Button>
                            <Button style={{backgroundColor:"gold",color:"black"}} onClick={this.editWorkdistanceUpdate} color="primary" autoFocus>
                              Update
                            </Button>
                            
                          </DialogContent>
                         
                        </Dialog>
                        
                        )}
                         </Card>
                  </Grid>
                  </Grid>






                 













                  </CardActions>
            </Card>
          

            </div>
            </div>
            <FooterXXX/>


            
            </div>
            
          

    );
  }
}