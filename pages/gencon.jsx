import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

import Image from 'next/image'
import Head from 'next/head'

import PageBanner from '../components/PageBanner'

import useAOS from '../hooks/useAOS'

const genconServices = [
  ' Design & build (Architectural, Structural, Mechanical, Electrical, Fire Protection)',
  'Construction ranging from residential, commercial, hospital, industrial',
  'Horizontal and vertical construction',
  'Renovation works (exterior and interior)',
  'Structural retrofitting works on buildings',
  'Specialized lift-slab and flat-slab construction with 30% cost reduction versus conventional structural design',
  'Interior fit-out works',
  'Value engineering for cost-efficiency on existing and proposed projects',
  'Permit-processing',
  'After-sales service'
]

export default function GenCon() {
  useAOS()
  return (
    <>
      <Head>
        <title>General Construction | Prescon</title>
      </Head>
      <PageBanner title="General Construction" image="/gencon/gencon-banner.jpg" />
      <Container as="main" maxW="container.lg">
        <Text mt={8} lineHeight={2} data-aos="fade-up">
          As a design and build general contractor, Prescon Philippines, Inc. has its own
          experienced team of engineers, architects, designers and project managers. Because of this
          setup, the company is considered to be a one-stop-shop for all your construction needs.
          From delivering cost-efficient buildings completed in a shorter period of time and
          enabling the client to deal directly with one company for all needs and requirements,
          processing permits, to the construction itself.
          <br />
          <br />
          The company analyzes the pros and cons of each project to guarantee the most positive
          outcome. It makes sure all materials for construction are of superior quality. It even
          offers a five-year warranty after building completion, compared to other developers
          offering only a one-year warranty period.
          <br />
          <br />
          Aside from mechanical, Prescon also offers electrical, sanitary and plumbing, and fire
          protection consultation. The company prides itself on building anything from bungalows,
          residential houses, and mid-rise to high-rise buildings; it also engages in retrofitting
          commercial establishments, hotels, parking areas, hospitals, schools, printing presses,
          among other structures.
        </Text>
        <Grid mt={8} templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4}>
          <Image
            data-aos="zoom-in"
            src="/gencon/gencon-body-rawkkim.png"
            height={800}
            width={800}
            objectFit="contain"
          />
          <Text data-aos="fade-up" lineHeight={2}>
            General construction paved the way to the creation of PPI&apos;s signature projects,
            including Strata Collection and Strata 100, which pioneered the Ortigas Center. Built in
            the mid-70s, it is among the prime buildings in the area that stands for quality and
            durability, having been resistant to natural disasters such as the 1990 killer
            earthquake.
            <br />
            <br />
            PPI&apos;s construction team also uses new technologies and innovations that would best
            cater to the construction needs of its clients. One particular technology is the
            Lift-slab method which is exclusively offered in the country by none other than,
            Prescon.
            <br />
            <br />
            Prescon Philippines, Inc. takes pride in being a leader in the industry for its advanced
            and unique construction methodology and technology, project safety and quality, and
            customer satisfaction.
          </Text>
        </Grid>
        <Box as="article" my={8}>
          <Heading data-aos="flip-up" my={8} fontSize={{ base: 'xl', lg: '4xl' }}>
            GENCON SERVICES
          </Heading>
          <List data-aos="fade-up" spacing={8}>
            {genconServices.map(service => (
              <ListItem key={service}>
                <HStack>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text>{service}</Text>
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </>
  )
}
