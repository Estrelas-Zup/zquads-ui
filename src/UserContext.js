import React from 'react';
import { TOKEN_POST, USER_GET } from './api.js/Api';
import { useNavigate } from 'react-router-dom';
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(null);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/');
    },
    [navigate],
  );

  async function getUser(jwtToken) {
    const { url, options } = USER_GET(jwtToken);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { jwtToken } = await tokenRes.json();
      window.localStorage.setItem('token', jwtToken);
      await getUser(jwtToken);
      navigate('conta/*');
    } catch (err) {
      setError(err.message);
      setLogin(null);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = USER_GET(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, login, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
