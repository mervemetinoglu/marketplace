import React, { useMemo } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/app/create-emotion-cache';
import Layout from '@/layouts/main-layout';
import { lightTheme, darkTheme } from '@/app/theme';
import { useThemeToggle } from '@/hooks/useThemeToggle';

const clientSideEmotionCache = createEmotionCache();

export interface IAppWrapperProps extends AppProps {
  emotionCache?: EmotionCache;
}

const AppWrapper = (props: IAppWrapperProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { isDarkMode } = useThemeToggle();

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppWrapper;
