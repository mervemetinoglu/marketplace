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
          fontWeight: 600,
          height: '1.5rem',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          textTransform: 'capitalize',
          color: (theme) => theme.customColors.productCard.title,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          height: '3.6rem',
          overflow: 'hidden',
          color: (theme) => theme.customColors.productCard.description,
        }}
      >
        {description}
      </Typography>
    </CardContent>
  );
};
