import React from 'react';
import { Typography, CardContent } from '@mui/material';

export interface IProductListItemContentProps {
  title: string;
  description: string;
}

export const ProductListItemContent = (props: IProductListItemContentProps) => {
  const { title, description } = props;

  return (
    <CardContent sx={{ mt: 1, padding: 0 }}>
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
          overflow: 'hidden',
          height: '3.6rem',
        }}
      >
        {description}
      </Typography>
    </CardContent>
  );
};
