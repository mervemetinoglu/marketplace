import React from 'react';
import { Typography, CardContent } from '@mui/material';

export interface ICartProductListItemContentProps {
  title: string;
  description: string;
}

export const CartProductListItemContent = (
  props: ICartProductListItemContentProps
) => {
  const { title, description } = props;

  return (
    <CardContent
      sx={{
        padding: 0,
        ml: {
          xs: 2,
        },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          textTransform: 'capitalize',
          color: (theme) => theme.customColors.productCard.title,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: 0.5,
          width: '300px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          color: (theme) => theme.customColors.productCard.description,
        }}
      >
        {description}
      </Typography>
    </CardContent>
  );
};
