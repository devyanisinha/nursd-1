import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function FormPropsTextFields() {
  const classes = useStyles();
   



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="First Name" defaultValue="" />
        <TextField required id="standard-required" label="Last Name" defaultValue="" />
        </div>
        <div>
        
        <TextField
          required id="standard-text"
          label="email address"  
        />
        <TextField
          required id="standard-text"
          label="User Name"
        />
      </div>
      <div>
      	<TextField
          id="standard-number"
          label="Phone Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          required id="standard-text"
          label="User Name"
        />
        
      </div>
      <div>
      
      <Button size="small" className={classes.margin}>
          Small
        </Button>
      </div>
      </form>
            );};
