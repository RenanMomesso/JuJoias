import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalSyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  console.log('AUI FUNCIONA')
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with Typescript, Nextjs, React and Styled-components"
        />
      </Head>
      <GlobalSyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
