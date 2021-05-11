import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>React</title>
        <link rel="shortcut icon" href="img/icon-192.png"/>
        <meta name="description" content="Projeto simples NextJS" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
    </>
  )
}

export default App
