import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { ReactComponent as Zquads } from '../Assets/Zquads.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Zquads - Home">
          <Zquads />
        </Link>
        <button onClick={userLogout}>Sair</button>
        {data ? (
          <Link className={style.login} to="/conta">
            Ola@{data && data.nickname}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
