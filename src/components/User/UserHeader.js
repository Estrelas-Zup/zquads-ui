import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className="container">
      <h1 className={styles.greeting}>
        <span className={styles.greetingP}>Olá,@</span>
        {data.name}
      </h1>
    </header>
  );
};

export default UserHeader;
