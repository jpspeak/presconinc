import { Container, Heading, Text } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Head from 'next/head'

import Nav from './Nav'
import PageBanner from '../PageBanner'

import useAOS from '../../hooks/useAOS'

export default function Layout({ children }) {
  useAOS()
  return (
    <>
      <Head>
        <title>Prescon Technology | Prescon</title>
      </Head>
      <PageBanner
        title="PRESCON Technology"
        image="/prescon-technology/prescon-technology-header.png"
      />
      <Container as="main" maxW="container.lg">
        <Text data-aos="fade-up" mt={8} lineHeight={1.8}>
          <strong>Prescon Philippines, Inc.</strong> introduced a lot of technologies that helped
          the construction industry in the country. Back in 1967, our founder pioneered a new method
          of pre-stressed concrete construction-the post-tensioning system. <br /> <br />
          Over the years we have made it our mission to continue developing and improving these
          systems and we are proud to offer the most efficient and economical ways of constructing a
          building.
        </Text>
        <Heading
          data-aos="flip-up"
          as="h2"
          my={8}
          textAlign="center"
          fontSize={{ base: 'xl', lg: '4xl' }}
        >
          GET TO KNOW OUR TECHNOLOGY
        </Heading>
        <Nav />
        {children}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
