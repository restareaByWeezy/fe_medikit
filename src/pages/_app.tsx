import { useState } from 'react'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import '../styles/global.scss'

import type { DehydratedState } from '@tanstack/react-query'
import { NextPageContext } from 'next'
import type { AppProps } from 'next/app'

import Head from 'next/head'

type PageProps = {
  dehydratedState?: DehydratedState
}

type ExtendedAppProps<P = object> = {
  err?: NextPageContext['err']
} & AppProps<P>

const MyApp = ({ Component, pageProps }: ExtendedAppProps<PageProps>) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
          </Head>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
