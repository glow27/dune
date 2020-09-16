import React from 'react';
import { useSelector } from 'react-redux';

export const Answer = () => {
  const word = useSelector(state => state.word)
  
return (<div>
  <p>Попугай говорит: {word}</p>
  </div>)
}
