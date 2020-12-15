import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, name, placeholder, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
