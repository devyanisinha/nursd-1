/*import React from 'react';
import './App.css'
const page2 =()=>{
return (
    <div>
      <h2>Set up a telephonic interview<br/>whichever time you like</h2>
      <h3>Pick date and slot</h3>
      <h4>
        A quick 20 minute interview to jumpstart your Nursing Career
      </h4>
    <form className=
    {classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </div>
    <Button onClick={() => { alert('clicked') }}>Submit</Button>
  );
}*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const page2 = () => {

  return (
    <div>
      <Container>
        <form>
          <h2>Set up a telephonic interview<br />whichever time you like</h2>
          <h3>Pick date and slot</h3>
          <h4>
            A quick 20 minute interview to jumpstart your Nursing Career
      </h4>
          <Grid item xs={12}>
            <TextField
              type='date'
              name='startdate'
              id='startdate'
              label='Start date'
              //defaultValue={any.startdate}
              variant='outlined'
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                min: new Date().toISOString().slice(0, 10),
                max: "2100-01-01"
              }}
            //error={!!errors["startdate"]}
            //required
            //fullWidth={isWidthDown("sm")}
            />
          </Grid>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default page2;