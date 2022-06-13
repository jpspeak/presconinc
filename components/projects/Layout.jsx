import PropTypes from 'prop-types'

import { Container, Grid, useBreakpointValue, useDisclosure } from '@chakra-ui/react'

import Head from 'next/head'

import PageBanner from '../PageBanner'
import Filter from './Filter'
import FilterModal from './FilterModal'

export default function Layout({ children }) {
  const isLg = useBreakpointValue({ base: false, lg: true })
  const { isOpen: isOpenFilter, onOpen: openFilter, onClose: closeFilter } = useDisclosure()
  return (
    <>
      <Head>
        <title>Projects | Prescon</title>
      </Head>
      <PageBanner title="PRESCON PROJECTS" image="/projects/project-banner.jpg" />
      <Container as="main" maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap="4" my="4">
          {isLg ? (
            <Filter />
          ) : (
            <FilterModal isOpen={isOpenFilter} onOpen={openFilter} onClose={closeFilter} />
          )}
          {children}
        </Grid>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
