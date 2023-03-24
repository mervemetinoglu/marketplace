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
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          textTransform: 'capitalize',
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          mt: 0.5,
          width: '300px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {description}
      </Typography>
    </CardContent>
  );
};
