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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';




const style = {
    root:{
      marginLeft:110,
      width:250,
      height:400,
    //   backgroundImage:
    // 'linear-gradient( 166deg, rgb(101,203,240) 50%, rgb(101,203,240) 50%, rgb(101,203,240) 50%)',
    backgroundColor:"transparent",
        
        color:"black",
        borderRadius:50,

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




export default function Rent () {
    const classes = useStyles();


    
        return(
            <div className="Rent">
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
                         image="https://i.pinimg.com/originals/fe/8d/2b/fe8d2b10fc2de1b5444a43d8464a6803.jpg"
                          title="vehicle service "
                      />
                      
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                              Ktm Duke
                       </Typography>
                      
                    </CardContent>
                </CardActionArea>
              <CardActions>
                      <Button size="small" variant="contained" href="/Rent/Pulsar" style={{backgroundColor:"gold"}}>
                        Details
                      </Button>
       
             </CardActions>
            </Card>
    
    
    

    <Card style={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1598981428151-ceb85869e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
          title="vehicle hire "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
          Royal Enfield
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/Rent/Dio" size="small" variant="contained" style={{backgroundColor:"gold"}} >
       Details
        </Button>
        
      </CardActions>
    </Card>


    <Card style={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images8.alphacoders.com/451/451741.jpg"
          title="vehicle repair"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Honda Civic
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/Rent/HondaCivic" variant="contained"  size="small" style={{backgroundColor:"gold"}} >
       Details
        </Button>
        
      </CardActions>
    </Card>


    <Card style={style.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/img_5959.jpg?itok=etSxcI1o"
          title="vehicle repair"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Honda Vezel
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/Rent/HondaVezel" variant="contained"  size="small" style={{backgroundColor:"gold"}} >
       Details
        </Button>
        
      </CardActions>
    </Card>
   





     </div>
     <br/>
    <Button  variant="contained"
        color="primary" href="/" style={{backgroundColor:"Crimson",color:"gold",marginLeft:1350,marginTop:100,height:45,width:160}}><ArrowBackIcon/>Back</Button>
    {/* </Paper> */}

    {/* <FooterXXX/> */}
            </div>









           
        );

    }
