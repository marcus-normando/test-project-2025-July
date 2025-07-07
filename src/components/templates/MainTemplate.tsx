import React from 'react';
import './MainTemplate.css';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div className="main-template">
    {children}
  </div>
);

export default MainTemplate; 