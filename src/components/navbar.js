import React from 'react';
import { Nav } from 'reactstrap';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={style.nav}>
      <Nav>
        <Link to="/">
          <b>Главная</b>
        </Link>
        <Link to="/worms">
          <b>Список шаи-хулуд</b>
        </Link>
        <Link to="/picture">
          <b>Кого не едят наши черви</b>
        </Link>
        <Link to="/parrot">
          <b>Попугай</b>
        </Link>
      </Nav>
      <hr />
    </div>
  );
};
