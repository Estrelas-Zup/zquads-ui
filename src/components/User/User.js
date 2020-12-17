import styles from './User.css'
import React from 'react';
import { UserContext } from '../../UserContext';
import Navbar from '../Navbar';

const User = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <div>
      <Navbar/>
      <div>
        Usuario<button onClick={userLogout}>Sair</button>
        Olá, @{data && data.nickname}
      </div> 
    </div>
  );
};

export default User;
