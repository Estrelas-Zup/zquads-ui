import React from 'react';
import styles from './Button.module.css';

const ButtonCreate = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.buttonCreate}>
      {children}
    </button>
  );
};

export default ButtonCreate;
