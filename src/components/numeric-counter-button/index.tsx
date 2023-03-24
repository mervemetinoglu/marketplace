import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {};

export const NumericCounterButton = (props: Props) => {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Button>-</Button>
      <Typography>0</Typography>
      <Button>+</Button>
    </Stack>
  );
};
