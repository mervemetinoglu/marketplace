import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

export interface ICartProductListItemImageProps {
  src: string;
}

export const CartProductListItemImage = (
  props: ICartProductListItemImageProps
) => {
  const { src } = props;

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Image
        src="https://m.media-amazon.com/images/I/71TQv0sUI9L._AC_UF1000,1000_QL80_.jpg"
        alt="aa"
        width="100px"
        height="150px"
        objectFit="contain"
      />
    </Box>
  );
};
