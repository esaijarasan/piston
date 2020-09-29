import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ima from '/home/ukistu08/project_piston/src/components/girl.jpg';
import { ClickAwayListener } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {

    
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(130),
      height: theme.spacing(20),
    
    },
 
  },
}));
const mystyle = {
    fontFamily: "Arial",
    color:"green",
    fontSize:"44px"
  };

export default function Terms() {
  const classes = useStyles();
 





  return (
    <div >

<Card style={{margin:"1%",  backgroundPosition: "center", backgroundRepeat: 'no-repeat',
    backgroundSize: "cover", backgroundImage:`url(${ima})`}}elevation={3} className={classes.root}>
     
         <CardContent>
         
          <Typography gutterBottom variant="h5" component="h2" >
          <p style={mystyle}>Our Terms And Conditions</p>
          </Typography>
          
          <Typography variant="h6" color="textSecondary" component="p">
         
           
             <Typography>
               <p style={{fontFamily: "Arial",
    color:"white",
    fontSize:"24px"}}>our team agreement para on this  </p>
             </Typography>
          
         
          </Typography>
        </CardContent>
        </Card>
      <CardActions>
       <Button style={{marginLeft:"490px"}} variant="contained"size="small" color="secondary">
          Agree
        </Button>
       
      </CardActions>
    
   
    </div>
  );
}