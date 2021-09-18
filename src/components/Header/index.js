import React from 'react';
import './styles.css';
import logoUrl from '../Header/The_Commons.png';
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="The Commons" />
  </div>
)
export default Header;