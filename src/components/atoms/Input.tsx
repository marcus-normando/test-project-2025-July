import React from 'react';
import './Input.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = React.memo((props) => {
  return <input className="input" {...props} />;
});

export default Input; 