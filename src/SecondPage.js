import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '30ch',
  },
margin: {
    margin: theme.spacing(1),
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
  	<div>
  	<h3>Let ous know you</h3>
 
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="hobbies"
          style={{ margin: 10 }}
          placeholder="what are your hobbies"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="fav color"
          id="margin-none"
          className={classes.textField}
          
        />
        <TextField
          label="fav animal"
          id="margin-dense"
          placeholder="dog,cat"
          className={classes.textField}
          
          margin="dense"
        />
         </div>
            <div>
        <TextField
          id="standard-full-width"
          label="where "
          style={{ margin: 10 }}
          placeholder="Placeholder"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="None"
          id="margin-none"
          
          className={classes.textField}
          
        />
        <TextField
          label="Dense"
          id="margin-dense"
          
          className={classes.textField}
          
          margin="dense"
        />
        <TextField
          label="relationship status "
          id="margin-normal"
          placeholder="married single"
          className={classes.textField}
          
          margin="normal"
        />
      </div>
    </div>
    	<div><Link to="/"><Button href="./SecondPage" variant="contained" size="medium" color="primary" className={classes.margin}>
         Back
        </Button></Link> 
        <Button href="./SecondPage" variant="contained" size="medium" color="primary" className={classes.margin}>
          Submit
        </Button>
        </div>
    </div>
    
  );
}
