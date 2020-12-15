import React from 'react';

const types = {
  email: {
    regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  },
  message: 'Preencha um email válido',
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
