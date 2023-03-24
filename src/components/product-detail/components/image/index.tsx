import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

export interface IProductImageProps {
  src: string;
  alt: string;
}

export const ProductImage = (props: IProductImageProps) => {
  const { src, alt } = props;

  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 1,
        width: '300px',
        height: '300px',
        position: 'relative',
      }}
    >
      <Image
        alt={alt}
        src={src}
        priority
        layout="fill"
        objectFit="contain"
        unoptimized
        loader={({ src: _src }) => _src}
      />
    </Box>
  );
};
