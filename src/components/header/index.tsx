import React from 'react';
import { Link } from '@/components/link';
import {
  Stack,
  Badge,
  AppBar,
  Toolbar,
  useTheme,
  Typography,
  IconButton,
  AppBarProps,
} from '@mui/material';
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from 'react-icons/hi';
import { useCart } from '@/hooks/useCart';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export type IHeaderProps = AppBarProps;

export const Header = (props: IHeaderProps) => {
  const muiTheme = useTheme();
  const { totalQuantity } = useCart();
  const { isDarkMode, handleToggleTheme } = useThemeToggle();

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        left: 0,
        boxShadow: 'none',
        backgroundColor: muiTheme.customColors.appBar.background,
        borderBottom: muiTheme.customBorders.borderSolid1,
      }}
      {...props}
    >
      <Toolbar
        sx={{
          px: 1,
          justifyContent: 'space-between',
          [muiTheme.breakpoints.up('md')]: {
            width: '1200px',
            margin: '0 auto',
          },
        }}
      >
        <Link href="/">
          <Typography
            aria-label="logo"
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: '1.5rem',
                md: '2.5rem',
              },
              color: muiTheme.customColors.appBar.logoColor,
            }}
          >
            marketplace
          </Typography>
        </Link>
        <nav>
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              '& svg': {
                fontSize: {
                  xs: '1.3rem',
                  md: '1.5rem',
                },
                stroke: muiTheme.customColors.appBar.color,
              },
            }}
          >
            <Link href="/favorites">
              <HiOutlineHeart />
              <Typography
                sx={{
                  ml: 1,
                  display: {
                    xs: 'none',
                    md: 'inline',
                  },
                  color: muiTheme.customColors.appBar.color,
                }}
              >
                Favorites
              </Typography>
            </Link>
            <Link href="/cart" sx={{ ml: 2 }}>
              <Badge badgeContent={totalQuantity} color="primary">
                <HiOutlineShoppingCart />
              </Badge>
              <Typography
                sx={{
                  ml: 1,
                  display: {
                    xs: 'none',
                    md: 'inline',
                  },
                  color: muiTheme.customColors.appBar.color,
                }}
              >
                Cart
              </Typography>
            </Link>
            <IconButton
              disableRipple
              onClick={handleToggleTheme}
              sx={{
                ml: {
                  xs: 1,
                  md: 2,
                },
                '&:hover': {
                  boxShadow: 'none',
                },
              }}
            >
              {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </IconButton>
          </Stack>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
