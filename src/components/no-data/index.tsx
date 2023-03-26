import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { NO_DATA_PRODUCTS_URL } from '@/constants/no-data-assets';

export interface INoDataWrapperProps {
  src?: string;
  message?: string;
}

export const NoDataWrapper = (props: INoDataWrapperProps) => {
  const { message, src = NO_DATA_PRODUCTS_URL } = props;

  return (
    <Stack
      sx={{
        mt: {
          xs: 10,
          md: 9,
        },
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          p: 6,
          borderRadius: '50%',
          backgroundColor: (theme) => theme.customColors.noData.imageBg,
        }}
      >
        <Image alt="No Data" src={src} width={150} height={150} />
      </Box>
      <Typography
        sx={{
          mt: 8,
          fontWeight: 600,
          fontSize: '1.2rem',
          textAlign: 'center',
          color: (theme) => theme.customColors.noData.color,
        }}
      >
        {message ?? 'Oops! There is no data yet... 😞'}
      </Typography>
    </Stack>
  );
};
