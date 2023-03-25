import React from 'react';
import Image from 'next/image';
import { HiOutlineHeart } from 'react-icons/hi';
import { IconButton, Box, useTheme } from '@mui/material';

export interface IProductListItemImageProps {
  src: string;
  title: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const ProductListItemImage = (props: IProductListItemImageProps) => {
  const { src, onToggleFavorite, isFavorite, title } = props;
  const muiTheme = useTheme();

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        priority
        src={src}
        alt={title}
        unoptimized
        width={300}
        height={200}
        objectFit="contain"
        loader={({ src: _src }) => _src}
      />
      <IconButton
        disableRipple
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite();
        }}
        sx={{
          top: 2,
          right: 0,
          position: 'absolute',
          boxShadow: muiTheme.customShadows.shadow1,
          backgroundColor: muiTheme.customColors.white2,
          '& svg': {
            '&:hover': {
              fill: muiTheme.customColors.red100,
            },
          },
        }}
      >
        {isFavorite ? (
          <HiOutlineHeart
            fill={muiTheme.customColors.red100}
            stroke={muiTheme.customColors.red100}
          />
        ) : (
          <HiOutlineHeart stroke={muiTheme.customColors.red100} />
        )}
      </IconButton>
    </Box>
  );
};
