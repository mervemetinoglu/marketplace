import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

export interface IProductContentProps {
  title: string;
  price: number;
  description: string;
}

export const ProductContent = (props: IProductContentProps) => {
  const { title, price, description } = props;
  const muiTheme = useTheme();

  return (
    <Stack>
      <Typography
        variant="h3"
        sx={{
          mt: 2,
          fontSize: 35,
          maxHeight: 200,
          overflow: 'hidden',
          [muiTheme.breakpoints.up('md')]: {
            maxHeight: 100,
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 3,
          maxHeight: 200,
          overflow: 'hidden',
          [muiTheme.breakpoints.up('md')]: {
            maxHeight: 100,
          },
        }}
      >
        {description}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: {
            xs: 3,
          },
          fontSize: 20,
          fontWeight: '700',
        }}
      >
        {`Price: $${price}`}
      </Typography>
    </Stack>
  );
};
