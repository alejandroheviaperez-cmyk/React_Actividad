import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/clients">
        AppClients
      </Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/clients">
          Ver clientes
        </Link>
        <Link className="nav-link" to="/new-client">
          Añadir clientes
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;