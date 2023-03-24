import React from 'react';
import { Container, Stack } from '@mui/material';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Stack >
      <Header  />
      <Container>{children}</Container>
      {/* <Footer /> */}
    </Stack>
  );
};

export default Layout;
