import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ChangEpassword from '/home/ukipc13/Desktop/piston_v1/project_piston/src/components/ChangEpassword.js';

import Fade from '@material-ui/core/Fade';
import Profileupload from '/home/ukipc13/Desktop/piston_v1/project_piston/src/components/Profileupload.js';

import Terms from '/home/ukipc13/Desktop/piston_v1/project_piston/src/components/Terms.js';

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
return ['Personal information', 'changEpassword'];
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
</Alert><Terms/><Button></Button>