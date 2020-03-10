import React from 'react';
import styles from './Booking.module.scss';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';


const BookingNew = () => {

  const [table, setTable] = React.useState('');
  const [people, setPeople] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const changeTable = event => {
    setTable(event.target.value);
  };

  const changePeople = event => {
    setPeople(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };


  return (
    <div className={styles.component}>
      <Typography  variant="h5" align='center'  color='primary'>New reservation</Typography>
      <Toolbar />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <FormControl className={styles.FormControl} variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Table</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={table}
              onChange={changeTable}
            >
              <MenuItem value="">
                <em>Select Table</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={styles.FormControl} variant="filled">
            <InputLabel id="demo-simple-select-filled-label">People</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={people}
              onChange={changePeople}
            >
              <MenuItem value="">
                <em>How many people</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </FormControl>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Select Time"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default BookingNew;
