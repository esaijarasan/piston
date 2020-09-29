import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  
  toolbar: {
    Height: 20,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
   
    marginBottom:0,
  
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));
const stylefooter = {
    backgroundImage:
    'linear-gradient( 166deg, rgb(189, 190, 191) 20%, rgb(136, 137, 138) 40%, rgb(250, 252, 255) 70%)',
    top:"auto",
        bottom:0,
        color:"black",
        marginBottom:0,
        height:73
        
    
}

export default function FooterXXX() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="sticky" style={stylefooter}>



    



        <Toolbar className={classes.toolbar}>
         

          <Typography className={classes.title} variant="h5" noWrap>
            
          </Typography>
          <IconButton aria-label="search" href="https://www.instagram.com/pistonslk/?igshid=1xd7as00ecux7" color="inherit">
          <InstagramIcon style={{backgroundColor:"white",color:"red"}}/>
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" href="https://www.facebook.com/PISTONslk-111743193959230/?referrer=whatsapp" color="inherit">
         < FacebookIcon  style={{backgroundColor:"white",color:"blue"}}/>
          </IconButton>




        </Toolbar>


        <Typography variant="overline" align="center" style={{marginTop:-35}}>
                     All Rights Reserved by PISTON <br/>
                   
          </Typography>

      </AppBar>
    </div>
  );
}

