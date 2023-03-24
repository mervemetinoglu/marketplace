import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

export interface IProductActionsProps {
  price: number;
}

export const ProductActions = (props: IProductActionsProps) => {
  const { price } = props;

  return (
    <Stack alignSelf="flex-end" p={2}>
      <Typography
        variant="body1"
        sx={{
          fontSize: 20,
          fontWeight: '700',
          alignSelf: 'flex-end',
        }}
      >
        {`Price: $${price}`}
      </Typography>
      <Box mt={3}>
        <Button sx={{}}>Add to Favorites</Button>
        <Button
          sx={{
            ml: 1,
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Stack>
  );
};
