export const API_URL = 'http://localhost:8080';

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

export function USER_POST(jwtToken) {
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
