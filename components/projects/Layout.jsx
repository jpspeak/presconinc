import { Box, Container } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Head from 'next/head'

import PageBanner from '../PageBanner'
import Nav from '../Nav'

const navItems = [
  {
    href: '/projects/post-tensioning',
    label: 'POST-TENSIONING'
  },
  {
    href: '/projects/gencon',
    label: 'GENCON'
  }
]

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Projects | Prescon</title>
      </Head>
      <PageBanner title="PRESCON PROJECTS" image="/projects/project-banner.jpg" />
      <Container as="main" maxW="container.lg">
        <Box py={8}>
          <Nav navItems={navItems} />
        </Box>
        {children}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
