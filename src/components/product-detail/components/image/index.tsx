import React from 'react';
import Image from 'next/image';
import { Box, useTheme } from '@mui/material';

export interface IProductImageProps {
  src: string;
  alt: string;
}

export const ProductImage = (props: IProductImageProps) => {
  const { src, alt } = props;
  const muiTheme = useTheme();

  return (
    <Box
      sx={{
        [muiTheme.breakpoints.up('sm')]: {
          width: '100%',
          display: 'flex',
          borderRadius: 1,
          alignItems: 'center',
          justifyItems: 'center',
          border: (theme) => theme.customBorders.borderSolid1,
        },
      }}
    >
      <Image
        priority
        alt={alt}
        src={src}
        unoptimized
        width={500}
        height={300}
        objectFit="contain"
        loader={({ src: _src }) => _src}
      />
    </Box>
  );
};
