import Head from 'next/head'
import '../styles/globals.scss'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Food Delivery</title>
        <link ref="icon" href="/favicon.icon" />
      </Head>

      <main>
        <Header />
        <Container className="mt-5">
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )
}

export default MyApp
