import { Box, Container, Grid, GridItem, Stack, Text, VStack } from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'

import People from '../components/our-story/People'
import Section from '../components/our-story/Section'
import Nav from '../components/our-story/Nav'
import PageBanner from '../components/PageBanner'

import useAOS from '../hooks/useAOS'

const people = [
  {
    image: '/our-story/russel-sabareza.jpg',
    name: 'Russel Christopher Sabareza',
    message:
      'In the last 15 years of working under Prescon, I can honestly say that this company is truly unbeatable! The management allowed me to be in charge of SM Clark and I learned a lot from it as it was my first project as the Project-in-Charge (PIC).',
    department: 'PT Department'
  },
  {
    image: '/our-story/victor-palalayv2.jpg',
    name: 'Engr. Victor M. Palalay',
    message:
      'Prescon is a company that can be summed up into three words: competent, industrious and prestigious. I can attest to it after staying for 22 years in the company. It was when I handled the P. Imes project as a Senior Engineer that made me decide to stay. It was my most unforgettable project, even up to this day. It was a lift-slab project with 53 columns and with 10 manpower used in the installation of the rows. I am proud to say that we finished it in just two months. I stayed for so long because of the benefits and the knowledge that was imparted to me.',
    department: 'PT Department'
  },
  {
    image: '/our-story/joel-cabilla-jojo.jpg',
    name: 'Arch. Joel A. Cabilla',
    message:
      '20 years of staying in Prescon has supported my family, especially the education of my children. I was the designing architect who sealed the deal for Strata Gold and Strata Views.',
    department: 'Gen-Con Department'
  },
  {
    image: '/our-story/rafael-crus-phil.jpg',
    name: 'Engr. Rafael A. Cruz',
    message:
      'Prescon has been my home for five years now and I am staying because of the consistent professional growth that I get to experience every day. For me, the company is great, promising and has a lot of potential.',
    department: 'Structural Engineering Department'
  },
  {
    image: '/our-story/daphne-capule.jpg',
    name: 'Daphne Claire Maravilla-Capule',
    message:
      'I started my career in Prescon in June 2014. I found it very difficult to entice more clients in getting units from us, but I took it as a challenge by proposing activities for marketing promotions, hiring for sales agents and licensed brokers who will man our sales office. Staying here for 5 years and seeing a lot of changes from processes and policies to management styles, makes me want to contribute more to its success.',
    department: 'Leasing Department'
  },
  {
    image: '/our-story/george-chavez-jogie.jpg',
    name: 'Engr. George G. Chavez',
    message:
      'The most memorable project that I handled was PAGE 1 Building in Alabang because it was the first project where I got to work and be mentored by Engineer Narciso Padilla himself. I was the project engineer during that time. 22 years later, I am still with Prescon because of the teamwork and the benefits that my family and I have been receiving.',
    department: 'Gen-Con Department'
  },
  {
    image: '/our-story/janette-laysa.jpg',
    name: 'Janette B. Laysa',
    message:
      'I have been with Prescon for 15 years already and my most memorable contribution to the company was when I took part in the development of Strata Views Building on the financial aspect of the project from start until the turn-over phase. The best part of staying is when the management ensures that I am being encouraged and mentored in achieving my full potential.',
    department: 'Finance Department'
  }
]

export default function OurStory() {
  useAOS()
  return (
    <>
      <Head>
        <title>Our Story | Prescon</title>
      </Head>
      <PageBanner title="OUR STORY" image="/our-story/our-story-hero-image.png" />
      <Container as="main" maxW="container.lg" mt={14} px={{ base: 8, lg: 4 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={14}>
          <GridItem as="aside" display={{ base: 'none', lg: 'block' }}>
            <Nav />
          </GridItem>
          <GridItem as="article">
            <Section title="HISTORY">
              <VStack alignItems="normal" spacing={8}>
                <Text data-aos="fade-up">
                  In 1967, Narciso Padilla founded Prescon Philippines, Inc. He brought for the
                  first time in the country a new method of pre-stressed concrete construction known
                  as the Prescon Post-tensioning System. This was believed to be the most adaptable
                  method for the country&apos;s then-fledgling construction industry and up to this
                  day remains best suited for a nation positioned in the earthquake belt.
                </Text>
                <Image
                  data-aos="zoom-in"
                  src="/our-story/narciso-padilla.png"
                  height={500}
                  width={800}
                  objectFit="contain"
                />
              </VStack>
            </Section>
            <Section title="MEET THE FOUNDER">
              <Text data-aos="fade-up">
                Born in the Philippines, Narciso Padilla went to the United States of America and
                obtained his Bachelor of Arts degree at Reed College in Portland, Oregon. He then
                pursued a Bachelor of Science in Civil Engineering at the Massachusetts Institute of
                Technology. He went for advanced studies at the Universidad de La Habana as
                Ingeniero Civil and completed studies as a Fallout Shelter Analyst at the University
                of Puerto Rico.
                <br />
                <br />
                After intensive practice in the design of bridges, housing developments, high-rise,
                industrial and commercial buildings from North and South America, he decided to
                specialize in a new system of construction which is the Prescon System, by joining
                Prescon Caribe, Inc. as its Vice President and General Manager.
                <br />
                <br />
                After two years of familiarizing himself with the system, he returned to the
                Philippines to establish the first post-tensioning company in the country that made
                the company an industry leader at that time. Now, Prescon continues to enjoy the
                trust of major developers and construction companies in the country.
              </Text>
            </Section>
            <Section title="OUR CONCEPT OF SERVICE">
              <VStack alignItems="normal" spacing={8}>
                <Text data-aos="fade-up">
                  Prescon&apos;s product is the supply and installation of post-tensioning tendons
                  and accessories.
                  <br />
                  <br /> The flexibility of Prescon&apos;s system affords both the designer and the
                  builder a system tailored to need an anchorage variation suited to the particular
                  structure.
                  <br />
                  <br />
                  An integral component of The Prescon System of post-tension is the Presconcept:
                  Total Service - something that the company has always provided, a tradition not
                  just an idea.
                </Text>
                <Stack data-aos="fade-up" direction={{ base: 'column', lg: 'row' }}>
                  <Box w={{ base: 'full', lg: '50%' }}>
                    <Image
                      src="/our-story/our-concept-of-service.gif"
                      height={400}
                      width={400}
                      objectFit="contain"
                    />
                  </Box>
                  <VStack alignItems="normal" spacing={8} w={{ base: 'full', lg: '50%' }}>
                    <Text p={4} bgColor="primary" color="white" fontWeight="semibold">
                      Presconcept: Total Service
                    </Text>
                    <Text>
                      Presconcept: Total Service means total service to the entire building team
                      (Architect, Engineer and the Contractor) in every phase of post-tensioning
                      from concept to completion.
                      <br />
                      <br />
                      Whether you are unfamiliar with post-tensioning or thoroughly acquainted with
                      it, the Presconcept: Total Service is yours from start to finish.
                    </Text>
                  </VStack>
                </Stack>
              </VStack>
            </Section>
            <Section title="VISION">
              <Text data-aos="fade-up">
                To be a reliable and preferred business partner in the local construction and real
                estate industry, known for its adaptability to changing customer requirements,
                cost-efficient technology, and value-added services in the next five years.
              </Text>
            </Section>
            <Section title="MISSION">
              <VStack alignItems="normal" spacing={8}>
                <Text data-aos="fade-up">
                  To ensure this climate of continuous growth and development as partners, our
                  organization will focus on results-oriented personnel, enhancement of methods,
                  systems with processes, continuous research and development programs as well as
                  upgrade of machinery and equipment towards a sustainable business relationship
                  with our customers.
                </Text>
                <Image
                  data-aos="zoom-in"
                  src="/our-story/breaker-image.png"
                  height={500}
                  width={800}
                  objectFit="contain"
                />
              </VStack>
            </Section>
            <Section title="OUR PEOPLE">
              <VStack alignItems="normal" spacing={20}>
                {people.map(({ image, name, message, department }) => (
                  <People
                    key={name}
                    name={name}
                    image={image}
                    message={message}
                    department={department}
                  />
                ))}
              </VStack>
            </Section>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
