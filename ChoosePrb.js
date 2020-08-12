import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, IconButton, Grid, Paper, Card, CardContent} from '@material-ui/core'
import { blue, cyan, red } from '@material-ui/core/colors';
import Footer from './Footer';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Input from '@material-ui/core/Input';




const style = {

    

    card : {
        backgroundColor:"white",
        height:400,
        width:1000,
        marginTop:50,
        marginLeft:100,},
    
    line: {
        height:10,
        backgroundColor:"black",
        width:3,
        marginLeft:240
    },
    buttonl: {
        height:100,
        width:150,
        backgroundColor:"lightgreen"
    },
  
  
  };
  const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
   
  }));
  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  
  


  

export default function ChoosePrb(){


  
  

    const classes = useStyles();


    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

   
        return(
            <div>
            <div>
                <AppBar position="static" style={{backgroundColor:"black"}}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" style={{backgroundColor:"royalblue", color:"black",}}>
                            Piston
                        </Typography>
                        
                        <Grid item xs={10}>
                        <Button color="inherit">HOME</Button>

                        </Grid>

                        <Grid item xs={1}>
                        <Button color="inherit">Profile</Button>
                        </Grid>
                        <Grid item xs={1}>
                        <Button color="inherit">Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>

            <Card style={style.card} elevation={12}>
                <CardContent>
                   <card>
                   <form className={classes.root} noValidate autoComplete="off">
                   <Input required id="standard-required"  label="Required" placeholder="Enter Your Contact Number" inputProps={{ 'aria-label': 'description' }} />

                  </form>



                   <FormControl component="fieldset">
      <FormLabel component="legend">choose Your Problem</FormLabel>
      
      <RadioGroup aria-label= "choose your problem" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Need Fuel" control={<Radio />} label="Need Fuel" />
        <FormControlLabel value="Flat Tire" control={<Radio />} label="Flat Tire" />
        <FormControlLabel value="others" control={<Radio />} label="Others" />
        <FormControlLabel value="I Havent understand Problem"  control={<Radio />} label="I Havent understand problem" />
      </RadioGroup>
    </FormControl>
    <br/>



    <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>


     
    



                  





                   </card>
                    
                    </CardContent>
                    </Card>
                    <Footer/>
            </div>  ) 
         
}