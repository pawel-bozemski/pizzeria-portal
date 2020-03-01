import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toolbar from '@material-ui/core/Toolbar';



const Dashboard = () => {

  const stats = [
    {
      type: 'Local',
      count: '20',
      total: '500',
    },
    {
      type: 'Delivery',
      count: '58',
      total: '1000',
    },

  ];

  const reservation = [
    {
      id: 1,
      hour: '15:00',
      table: 3,
      ppl: 3,
    },
    {
      id: 2,
      hour: '16:00',
      table: 2,
      ppl: 2,
    },
    {
      id: 3,
      hour: '15:00',
      table: 1,
      ppl: 4,
    },
    {
      id: 4,
      hour: '10:00',
      table: 5,
      ppl: 2,
    },
  ];

  const events = [
    {
      id: 1,
      hour: '10:00',
      table: 3,
      type: 'buisness',
      ppl: 12,
    },
    {
      id: 2,
      hour: '11:00',
      table: 2,
      type: 'Jam session',
      ppl: 8,
    },
    {
      id: 3,
      hour: '20:00',
      table: 3,
      type: 'birthday',
      ppl: 9,
    },
  ];

  return (
    <div className={styles.component}>
      <Typography variant="h5" align='center' color='primary'>Today`s stats </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Type</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell align="right">Total cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map(stats => (
              <TableRow key={stats.type}>
                <TableCell align="left">{stats.type}</TableCell>
                <TableCell align="center">{stats.count}</TableCell>
                <TableCell align="right">${stats.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Toolbar />

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Reservations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="center">Hour</TableCell>
                  <TableCell align="center">Table</TableCell>
                  <TableCell align="right">People</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservation.map(res => (
                  <TableRow key={res}>
                    <TableCell align="left">{res.id}</TableCell>
                    <TableCell align="center">{res.hour}</TableCell>
                    <TableCell align="center">{res.table}</TableCell>
                    <TableCell align="right">${res.ppl}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>Events</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="center">Hour</TableCell>
                  <TableCell align="center">Table</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="right">People</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events.map(event => (
                  <TableRow key={event}>
                    <TableCell align="left">{event.id}</TableCell>
                    <TableCell align="center">{event.hour}</TableCell>
                    <TableCell align="center">{event.table}</TableCell>
                    <TableCell align="center">{event.type}</TableCell>
                    <TableCell align="right">{event.ppl}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </div>
  );
};

export default Dashboard;
