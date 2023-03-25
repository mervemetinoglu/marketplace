import React from 'react';
import store from '@/app/store/store';
import { Provider } from 'react-redux';
import AppWrapper, { IAppWrapperProps } from '@/app/app-wrapper';

export default function MyApp(props: IAppWrapperProps) {
  return (
    <Provider store={store}>
      <AppWrapper {...props} />
    </Provider>
  );
}
