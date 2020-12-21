import React from 'react';
import Sidenav from './Sidenav';
import Header from './Header';
import Styles from './User.module.css';
import Content from './Content';
import Squads from './Squads';

const User = () => {
  return (
    <section className={Styles.container}>
      <Sidenav />
      <Header />
      <Content />
      <Squads />
    </section>
  );
};

export default User;
