import React from 'react';
import { useDispatch } from 'react-redux';
import {addText} from '../../redux/actions';

export const TypeHere = () => {
  const dispatch = useDispatch();
  
  return (
    <input  onChange={(e) => {dispatch(addText(e.target.value))}}></input>
  )
}
