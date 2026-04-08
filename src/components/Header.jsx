import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <GraduationCap className="icon" size={36} />
          <h1>Class of 2026</h1>
        </div>
        <p className="subtitle">Celebrating our achievements, one memory at a time.</p>
      </div>
    </header>
  );
};

export default Header;
