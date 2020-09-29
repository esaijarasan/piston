import React  from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Paper } from "@material-ui/core";

firebase.initializeApp({
  apiKey: "AIzaSyDVu8fkUGn3aP54esQg-N224RH81IhkOy8",
  authDomain: "pistonauth.firebaseapp.com"
})

 class    Sociallink extends React.Component{
  state={isSignedIn:false};

  uiConfig={
    signInFlow:"popup",
    signInOptions:[
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
   
    ],
    callbacks:{
      signInSuccess:()=> false
    }
  }
  componentDidMount=()=>{
 
    firebase.auth().onAuthStateChanged(user=>{this.setState({isSignedIn:!!user})})
  }
  render(){
    return(<Paper style={{marginTop:"20%",backgroundColor:"transparent"}}>
      <div>
{this.state.isSignedIn?
(
 <div>Sign in</div> 
):
(
<StyledFirebaseAuth uiConfig={this.uiConfig}
firebaseAuth={firebase.auth()}/>
)}



      </div>
      </Paper>
    )
  }
}
export default Sociallink; 