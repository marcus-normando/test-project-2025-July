import React from 'react';
import './Checkbox.css';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = React.memo((props) => {
  return <input type="checkbox" className="checkbox" {...props} />;
});

export default Checkbox; 