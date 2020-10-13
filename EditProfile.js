import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import img from "/home/ukistu08/project_piston/src/components/pngtree-vintage-motorcycle-print-with-skull-in-motorcycle-helmet-and-crossed-pistons-png-image_1043340.jpg";
import TextField from '@material-ui/core/TextField';



import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';





import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme)=>({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


export default function EditProfile() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
   
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
      <img src= {img} alt="Logo" height="3%" width="50%" /> 
      </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Edit Profile
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <form className={classes.root} noValidate autoComplete="off" style={{lineHeight:5}}>
   <Grid container spacing={3}>
       <Grid item xs={6} sm={3}>
      <TextField
        id="outlined-secondary"
        label="User Name"
        variant="outlined"
        color="secondary"
      />
</Grid>

<Grid item xs={6} sm={3}>
<TextField
required
        id="outlined-secondary"
        label="Email Address"
        type="email"
        variant="outlined"
        color="secondary"
      />

      </Grid>
      <Grid item xs={6} sm={3}>
<TextField
required
        id="outlined-secondary"
        label="PhoneNumber"
        type="number"
        variant="outlined"
        color="secondary"
      />
      </Grid>
      </Grid>
    </form>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained"size="small" color="primary">
          Edit
        </Button>
        <Button variant="contained"size="small" color="primary">
          Save
        </Button>
     
      </CardActions>
    </Card>
  );
}