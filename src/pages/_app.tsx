import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
