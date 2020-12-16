import React from 'react';
import { UserContext } from '../../UserContext';

const User = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <div>
      Usuario<button onClick={userLogout}>Sair</button>
      Ola@{data && data.nickname}
    </div>
  );
};

export default User;
