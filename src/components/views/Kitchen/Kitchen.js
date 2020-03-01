import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './Kitchen.module.scss';

const demoContent = [
  {id: 1, order: ['pizza_veg'], status: 'order'},
  {id: 2, order: ['salad_cesar'], status: 'prepared'},
  {id: 3, order: ['pizza_marg'], status: 'making'},
];

const renderActions = status => {
  switch (status) {
    case 'order':
      return (
        <>
          <Button>Start preparing</Button>
        </>
      );
    case 'prepared':
      return (
        <>
          <Button>Call waiter</Button>
        </>
      );
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Paper className={styles.component}>
        <h2>Kitchen view</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order details</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>{renderActions(row.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};
export default Kitchen;
