/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from '@mui/material/styles';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}
