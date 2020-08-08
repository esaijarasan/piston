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

export default class UserEntry extends Component{
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
 <img src="https://image.shutterstock.com/image-photo/repairing-engine-service-station-car-260nw-599113688.jpg" height="220" width="200" ></img>  
 </Grid>  

 <Grid item xs={3}>
<img src="https://pp.netclipart.com/pp/s/28-285798_car-graphics-vector-cleaning-wash-download-free-image.png"height="220" width="200" ></img>
</Grid>                      

 <Grid item xs={3}>
<img src="https://wallpaperaccess.com/full/1513452.jpg" height="220" 
width="200"
></img>
</Grid>

                        


<Grid item xs={3}>
<img src="https://sunriseautoservice.lk/images/slide/4.jpg" height="220" width="200"></img>
</Grid>



<Grid item xs={3}>
<Button variant="contained" color="primary">
  Vehicle Repair
</Button>
</Grid>

<Grid item xs={3}>
<Button variant="contained" color="primary">
  Vehicle service
</Button>
</Grid>

<Grid item xs={3}>
<Button variant="contained" color="primary">
  Hire/Rent
</Button>
</Grid>



<Grid item xs={3}>
<Button variant="contained" color="primary">
Vehicle Accessories
</Button>
</Grid>
                       </Grid>
                   </card>
                    
                </CardContent>
                </Card>
            </Paper>
            <Footer/>
            </div>   
        )   
    }
}