import type { AppProps } from 'next/app'
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import React from 'react'
import { globalStore } from '@/store/global-store';
import Layout from '@/Layout/Layout';

export default function App({ Component, pageProps, router }: AppProps) {
  const store = globalStore.getStore();

  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <Layout
          Component={Component}
          pageProps={pageProps}
          router={router}
        />
      </ReduxProvider>
    </React.Fragment>
  )
}
