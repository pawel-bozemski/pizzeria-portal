import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import BookingId from './components/views/Booking/BookingId';
import BookingNew from './components/views/Booking/BookingNew';
import EventsId from './components/views/Events/EventsId';
import EventsNew from './components/views/Events/EventsNew';
import OrderId from './components/views/Order/OrderId';
import OrderNew from './components/views/Order/OrderNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
    // secondary: {main: '#11cb5f'},
  },
});


function App() {
  return (

    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/id'} component={BookingId} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={BookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/id'} component={EventsId} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={EventsNew} />

              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/order/id'} component={OrderId} />
              <Route exact path={process.env.PUBLIC_URL + '/order/new'} component={OrderNew} />

              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
