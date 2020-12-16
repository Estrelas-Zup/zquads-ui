import React from 'react';

const types = {
  email: {
    regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
    message:
      'A senha precisa ter 1 caracter míusculo, 1 mínusculo e 1 digito. Com no mínimo 8 caracteres!',
  },
};

const UseForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validation(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Campo Vazio');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onBlur: () => validation(value),
  };
};

export default UseForm;
