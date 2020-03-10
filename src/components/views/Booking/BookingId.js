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
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const BookingId= () => {

  const demoContent = [
    {id: 1, table: 1, ppl: 4, date:'2020-03-10', hour: '19:00'},
  ];

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
      <Typography  variant="h5" align='Center'  color='primary'>Reservation id: {demoContent[0].id}</Typography>
      <Typography  variant="h5" align='left'  color='primary'>Table {demoContent[0].table}</Typography>
      <Typography  variant="h5" align='left'  color='primary'>Number of people: {demoContent[0].ppl}</Typography>
      <Typography  variant="h5" align='left'  color='primary'>Date: {demoContent[0].date}</Typography>
      <Typography  variant="h5" align='left'  color='primary'>Hour: {demoContent[0].hour}</Typography>
      <Toolbar />
      <Typography  variant="h5" align='Center'  color='primary'>Change reservation details</Typography>
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
      <Toolbar />
      <Button
        component={Link} to={`${process.env.PUBLIC_URL}/tables`}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Change reservation details
      </Button>
      <Toolbar />
      <Button
        component={Link} to={`${process.env.PUBLIC_URL}/tables`}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Discard and go back
      </Button>

    </div>
  );
};

export default BookingId;
