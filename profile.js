import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { ListItemAvatar } from '@material-ui/core';
// import SimplePaper from './Terms';
// import ImgMediaCard from './addpayment';

// import Profile from './profileuser';
// import SpacingGrid from './Service';
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
    // flexGrow: 100,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
   
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
    width:"200px",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
       
        className={classes.tabs}
      >
          <ListItemAvatar>
          <center><AccountCircleIcon fontSize="large" color="primary" /></center>
          </ListItemAvatar>
       <Tab  label="Profile Details" {...a11yProps(1)} />
        <Tab label="Payment Info" {...a11yProps(2)} />
        <Tab label="Terms & Condition" {...a11yProps(3)} />
        
      </Tabs>
      
      <TabPanel value={value} index={1}>
      {/* <Profile/> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
{/* <ImgMediaCard/> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
      {/* <SimplePaper/> */}
      {/* <SpacingGrid/> */}
      </TabPanel>
    
    </div>
  );
}