import React, { Component } from 'react';
import {AppBar,Toolbar, IconButton, Grid, Paper,} from '@material-ui/core'
import { blue, cyan, red } from '@material-ui/core/colors';
import Footer from './Footer';
import pist from "/home/ukistu08/project_piston/src/components/piston-k1PZ043-600.jpg";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FooterXXX from './Footer';
import car from "./car.jpg"

const style = {
    root:{
      marginLeft:30,
      width:400,
      height:400,
      backgroundImage:
    'linear-gradient( 166deg, rgb(151,209,223) 50%, rgb(255,215,0) 50%, rgb(255,215,0) 50%)',
    backgroundColor:"lightsteelblue"

    }
  }
  const mystyle = {
    backgroundImage:
    'linear-gradient( 166deg, rgb(189, 190, 191) 10%, rgb(136, 137, 138) 20%, rgb(240, 252, 255) 70%)',
    // color:
    // boxShadow: '20 20px 10px 90 rgba(255,255,255)',
    // 'linear-gradient( 136deg, rgb(23, 48, 232) 0%, rgb(23, 211, 232) 50%, rgb(23, 48, 232) 100%)'
    fontFamily: "Arial"
    };
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 250,
        },
      });

      

export default function UserEntry () {
    const classes = useStyles();
  
        return(
            <div  >
            <div>
                <AppBar position="static" style={mystyle}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" >
                            <img src="https://as2.ftcdn.net/jpg/00/74/73/39/500_F_74733998_LITsK789PXUwPTeGDFZDxS3rFHz17UWJ.jpg" style={{width:"80px",height:"70px"}} ></img>
                        </Typography>
                        
                        <Grid item xs={9}>
                        <Button href="/Home"  variant="contained"  style={mystyle}>HOME</Button>

                        </Grid>

                        <Grid item xs={2}>
                        <Button  variant="contained" style={mystyle}>Profile</Button>
                        </Grid>
                        <Grid item xs={1} >
                        <Button  variant="contained" style={mystyle}>Logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
            <Paper elevation={10}  style={{height:550}}> 
         <div style={{display:"flex",marginTop:20,backgroundImage:
    'linear-gradient( 166deg, rgb(189, 190, 191) 10%, rgb(136, 137, 138) 20%, rgb(250, 252, 255) 70%)',height:"100vh"}} elevation={0}  >
            {/* <Paper style={}> */}
           
            <Card style={style.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://openroadlexusrichmond.com/sites/default/files/styles/scale_width_1280/public/assets/page/hero_image/laROQUE-Lexus-Services-Alignment-1_preview.jpeg?itok=ARXYqahV"
          title="vehicle service "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Vehicle service
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            you can 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" href="/">
        book now
        </Button>
       
      </CardActions>
    </Card>
    
    
    

    <Card style={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.spreekillers.org/wp-content/uploads/car-hire.jpg"
          title="vehicle hire "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
          Hire/Rent
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            you can 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/Hire" size="small" variant="contained" color="primary" >
       Book now
        </Button>
        
      </CardActions>
    </Card>
    <Card style={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.motor1.com/images/mgl/mGmqo/s1/crw.jpg"
          title="vehicle repair"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          On Road Vehicle Repair
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           you can
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/ChoosePrb" variant="contained"  size="small" color="primary" href="/ChoosePrb">
       book now
        </Button>
        
      </CardActions>
    </Card>





     </div>
    </Paper>
    














//                 {/* <Card style={style.card} elevation={12}>
//                 <CardContent>
//                    <card>
//                    <Grid container spacing={3}>
                   

// <Grid item xs={4}>
//  <img src="https://image.shutterstock.com/image-photo/repairing-engine-service-station-car-260nw-599113688.jpg" height="220" width="200" ></img>  
//  </Grid>  

//  <Grid item xs={4}>
// <img src="https://pp.netclipart.com/pp/s/28-285798_car-graphics-vector-cleaning-wash-download-free-image.png"height="220" width="200" ></img>
// </Grid>                      

//  <Grid item xs={4}>
// <img src="https://wallpaperaccess.com/full/1513452.jpg" height="220" 
// width="200"
// ></img>
// </Grid>

                        





// {/* <Grid item xs={4}>
// <Button href="/ChoosePrb" variant="contained" color="primary">
  
// On Road Vehicle Repair
// </Button>
// </Grid> */}

    







// {/* <Grid item xs={4}>
// <Button  href="/" variant="contained" color="primary" onClick="">
//   Vehicle service
// </Button>
// </Grid>

// <Grid item xs={4}>
// <Button  href="/Hire" variant="contained" color="primary">
//   Hire/Rent
// </Button>
// </Grid>




//                        </Grid>
//                    </card>
                    
//                 </CardContent> */}
//                 {/* </Card> */} 
            
            <FooterXXX/>
            </div> 
              
        )   
    }
