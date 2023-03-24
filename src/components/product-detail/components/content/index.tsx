import { Stack, Typography } from '@mui/material';
import React from 'react';

export interface IProductContentProps {
  title: string;
  description: string;
}

export const ProductContent = (props: IProductContentProps) => {
  const { title, description } = props;

  return (
    <Stack>
      <Typography
        variant="h3"
        sx={{
          height: 100,
          overflow: 'hidden',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 1,
          height: 100,
          overflow: 'hidden',
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
};
