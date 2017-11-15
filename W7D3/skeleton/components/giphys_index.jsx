import React from 'react';

import { GiphysIndexItem } from './giphys_index_item';

export const GiphysIndex = ({giphys}) => {
  return (
    <ul>
      {giphys.map( giphy => <GiphysIndexItem key={giphy.id} url={giphy.images.fixed_height.url} />)}
    </ul>
  );
};
