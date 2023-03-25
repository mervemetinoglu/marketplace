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
      }}
    >
      <Header />
      <main
        style={{
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Container>{children}</Container>
      </main>
      {/* <Footer /> */}
    </Stack>
  );
};

export default Layout;
