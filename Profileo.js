import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ListItemAvatar, Avatar } from '@material-ui/core';
import Terms from "/home/ukipc13/Desktop/piston_v1/project_piston/src/components/Terms.js";
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import {AppBar, Button,Toolbar, Grid,} from '@material-ui/core'

import AccountBoxIcon from '@material-ui/icons/AccountBox';

import Profileuser from './Profileuser';
import FooterXXX from './Footer'
// import sea from '/home/ukistu08/project_piston/src/components/sea.jpg'
import { red } from '@material-ui/core/colors';
import CheckoutForm from './stripe';

const mystyle = {
  fontFamily: "Arial",
  backgroundColor:"transparent",
  color:"black"
  };
const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    
     


      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >



      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor:"white",
    
   
    display: 'flex',
    height: 554,
    // paddingTop:"1%"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Profileo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{height:"100vh"}}>
    <AppBar position="static" style={mystyle}>
            <Toolbar>
            
                
                <Typography variant="h6" >
                    <img src="https://www.pngitem.com/pimgs/m/120-1201491_download-blank-logo-for-picsart-blank-logo-for.png" style={{width:"80px",height:"70px"}} ></img>
                </Typography>
                
                <Grid item xs={9}>
                <Button href="/Home"  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>HOME</Button>

                </Grid>

                <Grid item xs={2}>
                <Button  variant="contained"  href="/MainPage" style={{backgroundColor:"black",color:"gold",marginLeft:10}}>MainPage</Button>
                </Grid>
                <Grid item xs={1} >
                <Button  variant="contained"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>Logout</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    
    <div className={classes.root}>
     
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
     <ListItemAvatar>
          <center><AccountBoxIcon style={{backgroundColor:"blue" ,color:"black" ,marginTop:"15%"}} fontSize="large" color="primary" /></center>
          </ListItemAvatar>
        <Tab  label="Profile Details" {...a11yProps(1)} />
        <Tab label="Payment Info" {...a11yProps(2)} />
        <Tab label="Terms & Condition" {...a11yProps(3)} />
        
      </Tabs>
       <TabPanel value={value} index={1}>
       <Profileuser/>
     </TabPanel>
     <TabPanel value={value} index={2}>
<div className="AppWrapper">
 <Elements options={ELEMENTS_OPTIONS} stripe={loadStripe('pk_test_51HEBecGDUUednvESGXzGZzkC20nJfRlPqe2gsBucEpxKvFsFT3hcOQ6wYJCZIJ2aCtz820NgME5hHRnftfXN594300NxwE1hn2')}>
 <CheckoutForm/>
  </Elements>
  </div>

      </TabPanel>
      <TabPanel value={value} index={3}>
     <Terms/>
          </TabPanel>
          {/* <FooterXXX/> */}
      
    </div>
    </div>
  );
}