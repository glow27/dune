import React, { useEffect, useState } from 'react';

export const Picture = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((res) => res.json())
      .then((json) => setData(json[0]));
  }, [setData]);

  return (
    <div>{data && <img src={data.url} width="600" height="500" alt="cat"></img>}</div>
  );
};
