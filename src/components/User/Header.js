import React from 'react';
import { UserContext } from '../../UserContext';
import Styles from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  const bell = <FontAwesomeIcon icon={faBell} />;

  return (
    <header className={Styles.header}>
      <h1 className={Styles.nickname}>
        <span>Olá@</span>
        {data.nickname}!
      </h1>

      <nav>
        <ul>
          <li>
            <p>{bell}</p>
          </li>
          <li>
            <p>Definições</p>
          </li>
          <li>
            <p onClick={userLogout}>Logout</p>
          </li>
        </ul>
      </nav>
      <p className={Styles.data}>Segunda feira, dia 20 de dezembro de 2020</p>
      <h1 className={Styles.dashboard}>Dashboard</h1>
    </header>
  );
};

export default Header;
