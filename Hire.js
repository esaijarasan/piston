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
 <img src="https://wallpapersite.com/images/wallpapers/boneshaker-79-2880x1800-custom-bike-hd-2285.jpg" height="220" width="200" ></img>  
 </Grid>  

 <Grid item xs={3}>
<img src="https://wonderfulengineering.com/wp-content/uploads/2014/07/Bugatti-Veyron-2013-Sports-Cars-HD-Wallpaper-2.jpg"height="220" width="200" ></img>
</Grid>                      

 <Grid item xs={3}>
<img src="https://besthqwallpapers.com/img/original/115580/hyundai-imax-n-drift-bus-4k-minibus-2019-cars-tuning.jpg" height="220" 
width="200"
></img>
</Grid>

                        


<Grid item xs={3}>
<img src="https://www.hdcarwallpapers.com/walls/2016_mercedes_benz_future_bus-wide.jpg" height="220" width="200"></img>
</Grid>



<Grid item xs={3}>
<Button variant="contained" color="primary">
  Bikes
</Button>
</Grid>

<Grid item xs={3}>
<Button variant="contained" color="primary" onClick="">
 Cars
</Button>
</Grid>

<Grid item xs={3}>
<Button variant="contained" color="primary">
  mini Bus
</Button>
</Grid>



<Grid item xs={3}>
<Button variant="contained" color="primary">
Bus
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