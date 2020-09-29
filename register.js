import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Paper, Typography, Card } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from '@material-ui/core/Icon'
// import sign from './images/signuppic.jpg';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {AppBar,Toolbar, IconButton, Grid, } from '@material-ui/core'

import divback from './all.css';

const style = {
    card : {
      marginTop:20,
      backgroundColor:"transparent",
      width:"20%",
      marginLeft:"5%",
      height:"80%",
      alignText:"center"
    },
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

export default class Register2 extends Component{
    constructor(){
        super();

        this.state = { 
            email:"",
            username:"",
            password:"",
            confirmpassword:"",
            message:"",
        };
    }

    componentDidMount() {
      // custom validation to verify username 
      ValidatorForm.addValidationRule('isName', (value) => {
          if ((this.state.username.length) >3 && (this.state.username.length) <30){
              return true; 
          }
          return false;            
      });
      // custom validation to verify password
      ValidatorForm.addValidationRule('isPassword', (value) => {
        if ((this.state.password.length) >8 && (this.state.password.length) <20){
            return true; 
        }
        return false;            
    });

      // confirm password validation
      ValidatorForm.addValidationRule('isConfirmpw',(value)=> {
        if ((this.state.password) == (this.state.confirmpassword)){
          return true;
        }
        return false;
    } );
    }
    

    
    handleUnameChange= (e) => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
        console.log(this.state.email);
    }
    handlePasswordchange = (e) => {
        this.setState({
            password: e.target.value
        });
        console.log(this.state.password);
    }
    handleconfirmPasswordchange = (e) => {
      this.setState({
          confirmpassword: e.target.value
      });
      console.log(this.state.confirmpassword);
  }

    handleSubmit= (e) => {
        e.preventDefault();
        
        if (this.state.username && this.state.email && this.state.password) {
            console.log(this.state.username + " " + this.state.password + " " + this.state.email)
            this.setState({
              successful: true,
              message: "Registered successfully"
            })
          } else {
            this.setState({
              successful: false,
              message: "username/password/email is empty"
            })
          }

    }

    render(){
       const {email, username, password, confirmpassword} = this.state;
        return(
          <div><AppBar position="static" style={mystyle}>
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
            <div className="divback">
            {/* <Paper elevation={10} style={style.root}> */}
            {/* style={{backgroundImage:`url(${sign})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", height:1000,width:1000,backgroundPosition:"center"}} */}
            <div>

            





              <Card style={style.card} elevation={0}>
                  {/* <AccountCircleRoundedIcon style={{height:40,width:40}}/> */}
                  <h2>Signup to Piston</h2>
                  <ValidatorForm
                  ref="form"
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}>

                  <TextValidator
                  label='UserName'
                  onChange={this.handleUnameChange}
                  name="username"
                  value={username}
                  validators={['required','isName']}
                  errorMessages={['this field is required','enter a valid username']} />

                  <br></br>
                  
                  <TextValidator
                  label='Email'
                  onChange={this.handleEmailChange}
                  name="email"
                  value={email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}/>
                  <br/>

                  <TextValidator
                  label='Password'
                  type="password"
                  onChange={this.handlePasswordchange}
                  name="password"
                  value={password}
                  validators={['required','isPassword']}
                  errorMessages={['this field is required','enter a valid password']}/>
                  <br/>
                  
                  <TextValidator
                  label='Cofirm Password'
                  type="password"
                  onChange={this.handleconfirmPasswordchange}
                  name="password"
                  value={confirmpassword}
                  validators={['required','isConfirmpw']}
                  errorMessages={['this field is required','your password is not matching']}/>
                  <br/>

                  <Button type="submit" variant="contained" style={{backgroundColor:"lightgray"}}>Submit</Button>
                  <br/>

                    {
                      this.state.message && (
                      <div>
                        <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                            <strong>{this.state.message}</strong>
                        </Typography>
                      </div>
                    )
                    }
                    <br/>
              </ValidatorForm>
              </Card>
            {/* </Paper> */}
            </div>
            </div>
            </div>
        );

    }
}