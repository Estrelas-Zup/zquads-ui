import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Header from '../Header';
import Squads from '../Squads/Squads';
import UserHeader from './UserHeader';

const User = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <section className="container">
      <Header />
      <UserHeader />
      <Routes>
        <Route element={<Squads />} />
      </Routes>
    </section>
  );
};

export default User;
