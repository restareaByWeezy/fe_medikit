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
import { styled } from 'styles/globalStitches'

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
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp

// STYLE //

const Wrapper = styled('div', {
  minWidth: '480px',
})
