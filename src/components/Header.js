import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import style from './Header.module.css';
import { ReactComponent as Zquads } from '../Assets/Zquads.svg';
import { UserContext } from '../UserContext';
import NavCard from './NavCard';
import useFetch from '../Hooks/useFetch';
import { SQUAD_GET } from '../api.js/Api';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();
  const [squads, setSquads] = React.useState([]);

  useEffect(() => {
    async function getSquads() {
      const { url, options } = SQUAD_GET();
      const { json } = await request(url, options);
      setSquads(json);
    }
    getSquads();
  }, []);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Zquads - Home">
          <Zquads />
        </Link>
        <div className={style.navCardList}>
          {loading ? (
            <span>loading...</span>
          ) : (
            squads.map((squad) => (
              <NavCard
                key={squad.idSquad}
                title={squad.name}
                subtitle={squad.projectName}
              />
            ))
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
