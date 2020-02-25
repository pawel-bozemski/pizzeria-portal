import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';


const Waiter = (id) => {
  return (
    <div className={styles.component}>
      <Link to={`${process.env.PUBLIC_URL}/order/${id}`}>
        <h2>Order Id</h2>
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/order/new`}>
        <h2>Order New</h2>
      </Link>
    </div>
  );
};

export default Waiter;
