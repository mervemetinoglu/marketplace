import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

export interface ICartProductListItemImageProps {
  src: string;
  title: string;
}

export const CartProductListItemImage = (
  props: ICartProductListItemImageProps
) => {
  const { src, title } = props;

  return (
    <Box>
      <Image
        priority
        src={src}
        alt={title}
        unoptimized
        width={100}
        height={100}
        objectFit="contain"
        loader={({ src: _src }) => _src}
      />
    </Box>
  );
};
