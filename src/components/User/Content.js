import React from 'react';
import { UserContext } from '../../UserContext';
import Styles from './User.module.css';
import photo from '../../Assets/Ellipse.png';

const Content = () => {
  const { data } = React.useContext(UserContext);

  return (
    <main className={Styles.Content}>
      <div className={Styles.photo}>
        <img src={photo} alt="" />
        <p>{data.name}</p>
        <span>Front-end</span>
      </div>

      <h3 className={Styles.infor}>Informações pessoais</h3>
      <div className={Styles.userInfo}>
        <div className={Styles.box}>
          <h1>E-mail</h1>
          <p>{data.email}</p>

          <h1>Sede</h1>
          <p>São Paulo - SP</p>

          <h1>Disponibilidade</h1>
          <p>8hrs/semana</p>

          <h1>Telefone</h1>
          <p>(11) 954649631</p>
        </div>
      </div>
    </main>
  );
};

export default Content;
