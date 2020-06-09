import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [nurse, setnurse] = React.useState('');
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [up, down] = React.useState(false);

  const handleChange = (event) => {
    setnurse(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
    const handChange = (event) => {
    setAge(event.target.value);
  };

  const handClose = () => {
    down(false);
  };

  const handOpen = () => {
    down(true);
  };

  return (
    <div>
    <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Job Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={nurse}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Clinical Nurse Specialist </em>
          </MenuItem>
          <MenuItem value={10}>Geriatric Nursing</MenuItem>
          <MenuItem value={20}>ER Nurse</MenuItem>
          <MenuItem value={30}>Critical Care Nurse</MenuItem>
        </Select>
      </FormControl>

        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Max Participants</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          up={open}
          onClose={handClose}
          onOpen={handOpen}
          value={age}
          onChange={handChange}
        >
          <MenuItem value="">
            <em>1</em>
          </MenuItem>
          <MenuItem value={10}>2</MenuItem>
          <MenuItem value={20}>3</MenuItem>
          <MenuItem value={30}>4</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div> <Link to="/Next"><Button href="./SecondPage" variant="contained" size="medium" color="primary" className={classes.margin}>
          Next 
        </Button></Link></div>
    </div>
  );
}
