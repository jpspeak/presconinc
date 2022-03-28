import { Box, Container, Link, Text } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Head from 'next/head'

import PageBanner from '../PageBanner'
import Nav from '../Nav'

import useAOS from '../../hooks/useAOS'

const navItems = [
  {
    href: '/properties/residential',
    label: 'RESIDENTIAL'
  },
  {
    href: '/properties/commercial',
    label: 'COMMERCIAL'
  }
]

export default function Layout({ children }) {
  useAOS()
  return (
    <>
      <Head>
        <title>Properties | Prescon</title>
      </Head>
      <PageBanner title="PRESCON PROPERTIES" image="/properties/properties-banner.png" />
      <Container as="main" maxW="container.lg">
        <Text data-aos="fade-up" mt={8}>
          Prescon Properties&apos; collection of commercial, residential and mixed type condominium
          buildings inspired the company to establish its leasing division to satisfy customers with
          quality, well maintained and consistently professional service.
          <br />
          <br />
          Moving to your life&apos;s next chapter gives you a new outlook on things that matter most
          especially when it comes to choosing a home for you and your loved ones.
          <br />
          <br />
          Prescon Properties is a nurturing haven for happy homes and strategic business locations.
          Tucked in the vibrant city of the Metro, Prescon Properties is an exclusive and organized
          community that satisfies your new outlook to life&apos;s essentials. From mobility, to
          growth and well-being, to peace and security, Prescon Properties fulfills the needs of
          modern families and discerning individuals.
          <br />
          <br />
          Prescon Properties offers masterfully-designed commercial, residentialand mixed-type
          condominium buildings which provide next-generation units, complemented by functional
          amenities and green open spaces, that will give you a healthy and vibrant experience.
        </Text>

        <Box mt={8}>
          <Nav navItems={navItems} />
        </Box>
        {children}
        <Text my={8}>
          For more information regarding our properties for lease, please visit our Facebook
          Page:&nbsp;
          <Link href="fb.com/presconleasing.ph/?_rdc=1&_rdr" color="blue.500" textDecor="underline">
            Prescon Philippines Inc. - Leasehold Property
          </Link>
        </Text>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
