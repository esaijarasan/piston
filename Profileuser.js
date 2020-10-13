import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ima from '/home/sinthujan/Desktop/piston_team/src/Piston/front-view-generic-brandless-moder-car_110488-502.jpg';
import ChangEpassword from '/home/ukipc13/Desktop/piston_v1/project_piston/src/components/ChangEpassword.js';
// import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Profileupload from '/home/ukipc13/Desktop/piston_v1/project_piston/src/components/Profileupload.js';
// import SimplePaper from './addpayment';
import Terms from './Terms';
// import Card from '@material-ui/core/Card';
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(-10),
    
    
  },
  backButton: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(-4),
  },
  instructions: {
    marginLeft:theme.spacing(1),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(0),
  },
}));

function getSteps() {
  return ['Profile', 'changepassword'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Profileupload/>;
    case 1:
      return <ChangEpassword/>;
  
    default:
      return ;
  }
}

export default function Profileuser() {
  const classes = useStyles();
  const steps = getSteps();
  const[stat]=React.useState(localStorage.getItem('username'))
  const [activeStep, setActiveStep] = React.useState(0);
   const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
    
  });

  const handleNext = (Transition) => () => { 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setState({
      open: true,
      Transition: Fade,
    });
  };
  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };


  return (
    <div className={classes.root}>
      
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography >
              
       <center><Alert style={{marginTop:"6%",width:"1000px"}} severity="success">
        <AlertTitle style={{width:"700px"}}>Successfully Update</AlertTitle>
        Agree to our information and lets go — <strong><marquee>Updated-{stat}</marquee></strong>
      </Alert><Terms/><Button className={classes.backButton} onClick={handleReset} variant="contained" color="primary"> Disagree</Button>
      </center>
      </Typography>
            
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                style={{backgroundColor:"gold", color:"black"}}
              >
                Back
              </Button>
              <Button className={classes.backButton} variant="contained"style={{backgroundColor:"green", color:"black"}} color="primary" onClick={handleNext()}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              
              <Stepper style={{backgroundColor:"white", color:"white"}} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step  key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}