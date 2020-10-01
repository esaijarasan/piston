import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Paper, Typography, Card } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from '@material-ui/core/Icon'
import divback from './all.css';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FooterXXX from './Footer';
import {AppBar,Toolbar, IconButton, Grid, } from '@material-ui/core'




const style = {
    root:{
      marginTop:80,
      marginLeft:200,
      width:250,
      height:400,
    //   backgroundImage:
    // 'linear-gradient( 166deg, rgb(101,203,240) 50%, rgb(101,203,240) 50%, rgb(101,203,240) 50%)',
    backgroundColor:"transparent",
        
        color:"white",
        borderRadius:25,
        borderColor:"red"

    }
  }
  const mystyle = {
    fontFamily: "Arial",
    backgroundColor:"transparent",
    };
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
         
        },
        media: {
          height: 250,
          
        },
      });




export default function FirstPage () {
    const classes = useStyles();


    
        return(
            <div className="home">
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
                        <Button  variant="contained"  href="/History"  style={{backgroundColor:"black",color:"gold",marginLeft:10}}>History</Button>
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

            {/* <Paper elevation={10}  style={{height:550}}>  */}
         <div style={{display:"flex",marginTop:60}}>
            {/* <Paper style={}> */}
            {/* ,marginTop:20,backgroundImage:
    'linear-gradient( 166deg, rgb(189, 190, 191) 10%, rgb(136, 137, 138) 20%, rgb(250, 252, 255) 70%)',height:"100vh"}} elevation={0}   */}
            <Card style={style.root} >
            <CardActionArea>
                    <CardMedia
                        className={classes.media}
                         image="https://thumbs.dreamstime.com/b/motorcycle-car-wash-big-bike-cleaning-foam-injection-make-more-clean-150244334.jpg"
                          title="vehicle service "
                      />
                      
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                              Vehicle service
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p" style={{color:"white"}}>
                              you can 
                       </Typography>
                    </CardContent>
                </CardActionArea>
              <CardActions>
                      <Button size="small" variant="contained" href="/AddNewServive" style={{backgroundColor:"gold"}}>
                         book now
                      </Button>
       
             </CardActions>
            </Card>
    
    
    

    <Card style={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/1131575/pexels-photo-1131575.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="vehicle hire "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
          Hire/Rent
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"white"}} >
            you can 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/Rent" size="small" variant="contained" style={{backgroundColor:"gold"}} >
       Book now
        </Button>
        
      </CardActions>
    </Card>
    <Card style={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="vehicle repair"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Quick Repair
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"white"}}  >
           you can
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/ChoosePrb" variant="contained"  size="small" style={{backgroundColor:"gold"}} href="/ChoosePrb">
       book now
        </Button>
        
      </CardActions>
    </Card>





     </div>
    {/* </Paper> */}

    {/* <FooterXXX/> */}
            </div>









           
        );

    }
