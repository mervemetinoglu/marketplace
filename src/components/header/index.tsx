import React from 'react';
import { Link } from '@/components/link';
import { Stack, AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import { HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';

export const Header = () => {
  const muiTheme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        width: '1200px',
        margin: '0 auto',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href="/">
          <Typography aria-label="logo" variant="h3">
            Logo
          </Typography>
        </Link>
        <nav>
          <Stack
            flexDirection="row"
            sx={{
              width: '180px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link href="/favorites">
              <HiOutlineHeart stroke={muiTheme.customColors.red} size="1.4em" />
              <Typography ml={1}>Favorites</Typography>
            </Link>
            <Link href="/cart">
              <HiOutlineShoppingCart size="1.4em" />
              <Typography ml={1}>Cart</Typography>
            </Link>
          </Stack>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
