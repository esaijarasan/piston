import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Avatar from '@material-ui/core/Avatar';
// import Alert from '@material-ui/
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


function OutlinedButtons() {
  const classes = useStyles();

  return (
  
          <div className={classes.root}>
      
      <UploadPreview />
     
    </div> 
   
  );
}

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  onSubmit(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
    <div >


      <Avatar style={{ width: "200px" ,height:"200px"}} src={this.state.file} />
 <label htmlFor="contained-button-file">
<input  type="file" accept="image/*"id="contained-button-file" onChange={this.onChange} hidden />
<Button variant="contained" color="primary" component="span" onChange={this.onChange}>
<AddAPhotoIcon/>
</Button>
</label>






   <div style={{textAlign:"Right",margin:"10px"}}>      
   <Button variant="contained" color="primary" onClick={this.resetFile}>Remove </Button><br></br><br></br>
<Button variant="contained" color="primary" onSubmit={this.resetFile}>Save </Button>
</div>
{this.state.file && (
          <div style={{textAlign:"center",margin:"10px"}}>
"Successful update"

             </div>
        )}
        
        
      </div>
    );
  }
}

 export default OutlinedButtons