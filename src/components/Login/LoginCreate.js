import React from 'react';
import { USER_POST } from '../../api.js/Api';
import useFetch from '../../Hooks/useFetch';
import UseForm from '../../Hooks/UseForm';
import { UserContext } from '../../UserContext';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import Input from '../Form/Input';

const LoginCreate = () => {
  const name = UseForm();
  const nickname = UseForm();
  const email = UseForm('email');
  const password = UseForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      name: name.value,
      nickname: nickname.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(email.value, password.value);
    console.log(response);
  }

  return (
    <section className="animeLeft">
      <form onSubmit={handleSubmit}>
        <Input placeholder="Nome completo" type="text" name="name" {...name} />
        <Input
          placeholder="Apelido"
          type="text"
          name="nickname"
          {...nickname}
        />
        <Input placeholder="E-mail" type="amail" name="email" {...email} />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          {...password}
        />
        <Input placeholder="Confirme a senha" type="password" />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
                      
};

export default LoginCreate;
