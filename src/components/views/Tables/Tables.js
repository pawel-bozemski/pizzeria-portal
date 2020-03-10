import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './Tables.module.scss';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const tables = [1, 2, 3];
const intervalHours = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];
const reservations = [
  {
    id: 1,
    hour: '15:00',
    table: 3,
    ppl: 3,
    reservation: true,
  },
  {
    id: 2,
    hour: '16:00',
    table: 2,
    ppl: 2,
    reservation: true,
  },
  {
    id: 3,
    table: 3,
    hour: '14:30',
    ppl: 4,
    reservation: true,
  },
  {
    id: 4,
    hour: '10:00',
    table: 5,
    ppl: 2,
    reservation: true,
  },
  {
    id: 5,
    hour: '10:00',
    table: 3,
    ppl: 12,
    reservation: false,
  },
  {
    id: 6,
    hour: '11:00',
    table: 2,
    ppl: 8,
    reservation: false,
  },
  {
    id: 7,
    hour: '20:00',
    table: 3,
    ppl: 9,
    reservation: false,
  },
  {
    id: 8,
    hour: '20:00',
    table: 3,
  },


];

const Tables = () => {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Typography  variant="h5" align='center'  color='primary'>Table reservation</Typography>
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
      <TableContainer className={styles.component} component={Paper} >
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell >Hour</TableCell>
              {tables.map(table => (
                <TableCell align="center" key={table}>
                  {table}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {intervalHours.map(hour => (
              <TableRow key={hour}>
                <TableCell component="th" scope="row">
                  {hour}
                </TableCell>
                {tables.map(table => (
                  <TableCell align="center" key={table}>
                    {reservations.map(res => {
                      if(table === res.table && hour === res.hour && res.reservation === true)
                        return (
                          <Link exact to={process.env.PUBLIC_URL + `/tables/booking/${res.id}`}>
                            <Button>Check Resertation</Button>
                          </Link>
                        );
                      else if (table === res.table && hour === res.hour && res.reservation === false)
                        return (
                          <Link exact to={process.env.PUBLIC_URL + `/tables/events/${res.id}`}>
                            <Button>Check Event</Button>
                          </Link>
                        );
                      else return null;
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tables;
