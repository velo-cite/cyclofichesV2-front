import React from 'react';
import './TheHeader.scss';

function TheHeader() {
  return (
    <header className="TheHeader">
        <img src="{logo}" className="TheHeader-logo" alt="Logo Vélo-Cité"/>
        <h1>Cyclo-fiches par Vélo-Cité</h1>
        <span></span>
    </header>
  );
}

export default TheHeader;
