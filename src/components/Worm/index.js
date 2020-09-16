import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WormsContext } from '../Arrakis/index';

export const Worm = () => {
  const worms = useContext(WormsContext);
  const { name } = useParams();
  const worm = worms.find((el) => el.name === name);
  const { size, age } = worm;
  const [wormSize, setWormSize] = useState(size);

  return (
    <div>
      <h1>{name}</h1>
      <p>size: {wormSize}</p>
      <p>age: {age}</p>
      <button
        onClick={() => {
          setWormSize((state) => (state += 5));
        }}
      >
        FEED
      </button>
    </div>
  );
};
