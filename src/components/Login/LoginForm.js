import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import UseForm from '../../Hooks/UseForm';
import { TOKEN_POST, USER_POST } from '../../api.js/Api';

const LoginForm = () => {
  const email = UseForm('email');
  const password = UseForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(jwtToken) {
    const { url, options } = USER_POST(jwtToken);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = TOKEN_POST({
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    const json = await response.json();
    window.localStorage.setItem('token', json.jwtToken);
    getUser(json.jwtToken);
    console.log(json);
  }

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="E-mail ou apelido"
          {...email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          {...password}
        />

        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
