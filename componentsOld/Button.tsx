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
    <button
      className={`${styles.button} ${buttonClass}`}
      onClick={onClick}
      // Moved button inline style to CSS module. No inline style needed here.
      onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.96)')}
      onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {text}
      <span
        style={{
          display: 'inline-block',
          marginLeft: '0.5em',
          transition: 'transform 0.2s',
        }}
        className={styles.icon}
      >
        &#8594;
      </span>
    </button>
  );
};

export default Button;
