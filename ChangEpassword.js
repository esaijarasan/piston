import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import ima from '/home/ukipc13/Desktop/piston_v1/project_piston/src/components/girl.jpg';
const useStyles = makeStyles((theme)=>({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  root: {
    maxWidth: "100%",
    maxHeight: "100%",

  },
  textField: {
    
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


export default function ChangEpassword() {
  const classes = useStyles();
  const[state]=React.useState(localStorage.getItem('username'))
  const [values, setValues] = React.useState({
   
    password: '',
    showPass:false,
    
    
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowoldPassword = () => {
  setValues({ ...values, showoldPassword: !values.showoldPassword });
  };

  const handleClickShownewPassword = () => {
    setValues({ ...values, shownewPassword: !values.shownewPassword 
    });
  }
  const handleClickShowretypePassword = () => {
    setValues({ ...values, showretypePassword: !values.showretypePassword 
    });
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div >
          <Card className="cardCP">
      
        
      {/* <CardContent>  */}
      
        <Typography gutterBottom variant="h5" component="h2">
        
    <AppBar position="static" style={{height:"8%",width:"1080px",marginLeft:"-1%", }} >
    
        <Typography  variant="h6"style={{textAlign:"center" ,backgroundColor:"gold", color:"black"}} >
        Change Password-{state}
        </Typography>
    </AppBar>
  
        </Typography>

  
   
  
          
          <div style={{marginLeft:"-1%",padding:"1%", height:"348px",width:"700px",backgroundColor:"transparent",marginTop:"5%" }}>
          <Typography variant="body2" color="textSecondary" component="p">


       <Card style={{marginTop:"3%",marginLeft:"35%",display:"flex",height:"70px",textAlign:"center",width:"50%", backgroundColor:"transparent"}}>
       <h3 style={{textAlign:"left",padding:"1%"}}> Old Password </h3>
       <Divider  orientation="vertical" flexItem />
<FormControl style={{paddingLeft:"12%"}}>

          <InputLabel  htmlFor="oldpassword" style={{paddingLeft:"27%"}}> Old Password</InputLabel>
          <Input
          
            id="oldpassword"
            type={values.showoldPassword ? 'string' : 'password'}
            value={values.showoldPass}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                id="oldpassword"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowoldPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showoldPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Card>
        <Card style={{marginTop:"3%",marginLeft:"35%",display:"flex",height:"70px",textAlign:"center",width:"50%" , backgroundColor:"transparent"}}>
        <h3 style={{textAlign:"left",padding:"1%"}}> New Password</h3>
        <Divider  orientation="vertical" flexItem />
        <FormControl style={{paddingLeft:"11%"}} >
          <InputLabel htmlFor="Newpassword" style={{paddingLeft:"24%"}}> New Password</InputLabel>
          <Input
            id="Newpassword"
            type={values.shownewPassword? 'string' : 'password'}
            value={values.shownewPass}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password"
                  onClick={handleClickShownewPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.shownewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          
        </FormControl>
        </Card>
        <Card style={{marginTop:"3%",marginLeft:"35%",display:"flex",height:"70px",textAlign:"center" ,width:"50%", backgroundColor:"transparent"}}>
       <h3 style={{textAlign:"left",padding:"1%"}}> Confirm Password</h3>
       <Divider  orientation="vertical" flexItem />
<FormControl style={{paddingLeft:"7%"}} > 
<InputLabel htmlFor="retype-password"style={{paddingLeft:"15%"}}> Confirm Password</InputLabel>
<Input
  id="retype-password"
  type={values.showretypePassword ? 'string' : 'password'}
  value={values.showoldPass}
  onChange={handleChange('password')}
  endAdornment={
    <InputAdornment position="end">
    <IconButton
    id="retype-password"
    aria-label="toggle password visibility"
    onClick={handleClickShowretypePassword}
    onMouseDown={handleMouseDownPassword}
                >
                  {values.showretypePassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          
        </FormControl>

        </Card>
       
         
         
         
          </Typography>
        
      
      </div>
   </Card>
    </div>
  );
}