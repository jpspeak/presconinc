import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'

import PropTypes from 'prop-types'

import NextNProgress from 'nextjs-progressbar'

import Layout from '../components/Layout'
import theme from '../theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
