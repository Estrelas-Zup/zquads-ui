import React from 'react';
import style from './Navbar.module.css';
import { ReactComponent as Zquads } from '../Assets/Zquads.svg';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <header className={style.navbar}>
      <nav className={`${style.nav} container`}>
        <div className={style.logo}>
          <Zquads className={style.zquads}/>
          <Searchbar/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
