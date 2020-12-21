import React, { useEffect } from 'react';
import { SQUAD_GET } from '../../api.js/Api';
import useFetch from '../../Hooks/useFetch';
import NavCard from '../NavCard';
import ListingWithThumbnail from '../Skeleton/ListingWithThumbnail';
import Styles from './User.module.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const token = window.localStorage.getItem('token');

const Sidenav = () => {
  const { loading, request } = useFetch();
  const [squads, setSquads] = React.useState([]);
  const plus = <FontAwesomeIcon icon={faPlus} />;

  useEffect(() => {
    async function getSquads(token) {
      const { url, options } = SQUAD_GET(token);
      const { json } = await request(url, options);
      setSquads(json);
    }
    getSquads();
  }, [request]);

  return (
    <nav className={Styles.sidenav}>
      <h1>
        <span>Z</span>QUADS
      </h1>
      <input className={Styles.pesquisa} type="search" />
      <div className={Styles.squads}>
        {loading ? (
          <div className={Styles.loading}>
            <ListingWithThumbnail />
          </div>
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
      <hr />
      {plus}Criar nova squad
    </nav>
  );
};

export default Sidenav;
