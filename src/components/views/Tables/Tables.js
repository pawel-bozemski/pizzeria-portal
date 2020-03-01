import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/id`}>
        <h2>Booking Id</h2>
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        <h2>Booking New</h2>
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/id`}>
        <h2>Event Id</h2>
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>
        <h2>Event New</h2>
      </Link>
    </div>
  );
};

export default Tables;
