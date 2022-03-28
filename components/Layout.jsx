import Head from 'next/head'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
