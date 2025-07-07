import React from 'react';
import './Button.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = React.memo((props) => {
  return <button className="button" {...props} />;
});

export default Button; 