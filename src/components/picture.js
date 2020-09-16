import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPic } from '../redux/actions';
import {Spinner} from './spinner';


export const Picture = () => {
  const dispatch = useDispatch();
  const pic = useSelector((state) => state.pic);
  const load = useSelector((state) => state.loading);
  

  useEffect(() => {
    dispatch(loadPic());
  }, [dispatch]);

  return (
    <div>
      {load ? <Spinner/> : <img src={pic[0].url} width="600" height="500" alt="cat"></img>}
    </div>
  );
};
