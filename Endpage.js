import React, { Component } from 'react';
import { Card, Button } from '@material-ui/core';
import pic from './endpage.jpg';

export default class Timer extends Component {
state = {
minutes: 15,
seconds: 0,
}

componentDidMount() {
this.myInterval = setInterval(() => {
const { seconds, minutes } = this.state

if (seconds > 0) {
this.setState(({ seconds }) => ({
seconds: seconds - 1
}))
}
if (seconds === 0) {
if (minutes === 0) {
clearInterval(this.myInterval)
} else {
this.setState(({ minutes }) => ({
minutes: minutes - 1,
seconds: 59
}))
}
}
}, 1000)
}

componentWillUnmount() {
clearInterval(this.myInterval)
}

render() {
const { minutes, seconds } = this.state
return (
<div style={{backgroundImage:`url(${pic})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",height:"100vh"}}>
<Card></Card>
<Card style={{background:"transparent",height:"auto",width:350,color:"gold",marginLeft:"35%",marginTop:"15%",textAlign:"center"}} variant="outlined">
{ minutes === 0 && seconds === 0
? <h1>Time Finished</h1>
: <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
}
<Button style={{color:"black",backgroundColor:"red"}}>Cancel</Button>
</Card>
</div>
)
}
}