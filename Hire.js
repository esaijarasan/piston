import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, IconButton, Grid, Paper, Card, CardContent} from '@material-ui/core'
import { blue, cyan, red } from '@material-ui/core/colors';
import Footer from './Footer';


const style = {
    card : {
        backgroundColor:"white",
        height:320,
        width:1000,
        marginTop:100,
        marginLeft:100,
    },
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
    }
  }

export default class Hire extends Component{
    constructor(){
        super();
    }

    render(){
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
            <Paper elevation={0}>
                <Card style={style.card} elevation={12}>
                <CardContent>
                   <card>
                   <Grid container spacing={3}>
                   

<Grid item xs={3}>
 <img src="https://cdn.autoportal.com/bp-v3/img/models/5/1/dio-black.png" height="220" width="200" ></img>  
 </Grid>  

 <Grid item xs={3}>
<img src="https://images.financialexpress.com/2020/02/2020-BS6-bajaj-Pulsar-150-Twin-Disc.jpg"height="220" width="200" ></img>
</Grid>                      

 <Grid item xs={3}>
<img src="https://www.wsupercars.com/wallpapers/Honda/2020-Honda-Civic-Si-004-1080.jpg" height="220" 
width="200"
></img>
</Grid>

                        


<Grid item xs={3}>
<img src="https://c4.wallpaperflare.com/wallpaper/640/966/464/2014-concept-honda-modulo-wallpaper-preview.jpg" height="220" width="200"></img>
</Grid>



<Grid item xs={3}>
<Button variant="contained" color="primary">
  Dio Bike
</Button>
</Grid>

<Grid item xs={3}>
<Button variant="contained" color="primary" onClick="">
Pulsar 150
</Button>
</Grid>

<Grid item xs={3}>
<Button variant="contained" color="primary">
 Honda Civic
</Button>
</Grid>



<Grid item xs={3}>
<Button variant="contained" color="primary">
Honda Vezel
</Button>
</Grid>
                       </Grid>
                   </card>
                    
                </CardContent>
                </Card>
            </Paper>
            {/* <Footer/> */}
            </div> 
              
        )   
    }
  }