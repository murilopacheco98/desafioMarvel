import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const StylesGlobal: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        a: { textDecoration: 'none', color: 'inherit' },
        '& 	.MuiCardActionArea-root': {
          backgroundColor: '#202020',
          color: '#ffff',
        },
      }}
    />
  );
};

export default StylesGlobal;
