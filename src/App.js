import React from 'react';

import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './UserContext';


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/*" element={<Login />} />
            <ProtectedRouter path="conta/*" element={<User />} />
          </Routes>
        </UserStorage>

      </BrowserRouter>
    </div>
  );
}

export default App;
