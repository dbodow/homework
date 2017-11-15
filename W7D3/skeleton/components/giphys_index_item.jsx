import React from 'react';

export const GiphysIndexItem = url => {
  return (
    <li>
      <img src={url.url}/>
    </li>
  );
};
