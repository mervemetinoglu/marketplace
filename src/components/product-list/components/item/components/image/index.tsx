import React from 'react';
import { IconButton, Box, useTheme } from '@mui/material';
import { HiOutlineHeart } from 'react-icons/hi';
import Image from 'next/image';

export interface IProductListItemImageProps {
  src: string;
}

export const ProductListItemImage = (props: IProductListItemImageProps) => {
  const { src } = props;
  const muiTheme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Image
        src={src}
        alt="aa"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        unoptimized
        loader={({ src: _src }) => _src}
      />
      <IconButton
        sx={{
          position: 'absolute',
          top: 2,
          right: 0,
          bgcolor: 'white',
          boxShadow: '1px 1px 2px 1px #e0e0e0',
          '&:hover': {
            bgcolor: 'white',
          },
          '& svg': {
            '&:hover': {
              fill: muiTheme.customColors.red,
            },
          },
        }}
      >
        <HiOutlineHeart stroke={muiTheme.customColors.red} />
      </IconButton>
    </Box>
  );
};
