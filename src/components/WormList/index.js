import React, { useContext } from 'react';
import { WormsContext } from '../Arrakis/index';
import style from './wormList.module.css';
import { Link } from 'react-router-dom';

export const WormList = () => {
  const worms = useContext(WormsContext);
  return (
    <div>
      <ul className={style.list}>
        {worms.map((el, i) => (
          <li key={i}>
            <Link to={`/worms/${el.name}`}>
              <h3>{el.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
