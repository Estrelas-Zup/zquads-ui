export const API_URL = 'http://localhost:8080';
const token = window.localStorage.getItem('token');

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}


export function USER_GET(jwtToken) {

  return {
    url: API_URL + '/users/userInfo',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    },
  };
}


export function USER_POST(body) {
  return {
    url: API_URL + '/users',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function SQUAD_GET() {
  return {
    url: API_URL + '/squads',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

