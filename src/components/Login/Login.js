import React from 'react';

import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import { Navigate, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
        </Routes>
      </div>
    </section>

  );
};

export default Login;
