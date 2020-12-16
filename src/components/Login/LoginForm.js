import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import UseForm from '../../Hooks/UseForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import ButtonCreate from '../Form/ButtonCreate';

const LoginForm = () => {
  const email = UseForm('email');
  const password = UseForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    userLogin(email.value, password.value);
  }

  return (
    <section className="animeLeft">
      <form className={styles.form} onSubmit={handleSubmit}>
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
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link to="/criar">
        <ButtonCreate>Criar uma conta</ButtonCreate>
      </Link>

      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha
      </Link>
    </section>
  );
};

export default LoginForm;
