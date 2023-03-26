import React from 'react';
import { Container, Stack } from '@mui/material';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        '& > main': {
          minHeight: 'calc(100vh - 64px)',
        },
      }}
    >
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      {/* <Footer /> */}
    </Stack>
  );
};

export default Layout;
