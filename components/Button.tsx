import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', onClick }) => {
  const buttonClass = variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary;

  return (
    <button className={`${styles.button} ${buttonClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
