import React from 'react';
import './TheHeader.scss';
import logo from './logo.png';

function TheHeader() {
  return (
    <header className="TheHeader relative bg-gray-300 p-5">
      <img src={logo} className="TheHeader-logo" alt="Logo Vélo-Cité"/>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white">Cyclo-fiches par Vélo-Cité</h1>
    </header>
  );
}

export default TheHeader;
