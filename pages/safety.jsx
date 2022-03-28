import { Box, Center, Container, Grid, Heading, Text } from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'

import SafetyAndQualityMethodItem from '../components/safety/SafetyAndQualityMehodItem'

import useAOS from '../hooks/useAOS'

const safetyAndQualityMethods = [
  {
    title: 'PLAN',
    description: 'Identification of proper methodology and potential risks and hazards.'
  },
  {
    title: 'DO',
    description:
      'Application of corrective actions and recommendations presented in the planning stage.'
  },
  {
    title: 'ACTION',
    description: 'Implementation of countermeasures and improvements.'
  },
  {
    title: 'CHECK',
    description:
      'Confirmation that all required fields are passed and correction of any potential risks.'
  }
]

export default function Safety() {
  useAOS()
  return (
    <>
      <Head>
        <title>Safety | Prescon</title>
      </Head>
      <Container as="main" maxW="container.lg">
        <Center mt={8}>
          <Image
            data-aos="zoom-in"
            src="/safety/safety-firstv2.png"
            height={400}
            width={400}
            objectFit="contain"
          />
        </Center>
        <Box as="section" mt={8}>
          <Heading data-aos="flip-up" as="h1" textAlign="center">
            Safety and Quality
          </Heading>
          <Text data-aos="fade-up" mt={8} lineHeight={1.8} textAlign="center">
            Under the banner of Prescon&apos;s Project Management Group, the team made sure that
            they have Safety Officers and QA/QC Engineers who monitor and improve the safety and
            quality requirements set by the management and clients.
            <br />
            <br />
            Safety has always been the main priority of the company when it comes to construction
            along with making sure that workmanship is never compromised. They have developed a
            system in which these two blend perfectly in delivering safe and high-quality projects.
          </Text>
        </Box>
        <Grid
          data-aos="zoom-in"
          as="section"
          mt={8}
          templateColumns={{ base: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
          gap={{ base: 4, lg: 8 }}
        >
          <Image src="/safety/ehs-management.png" height={400} width={400} objectFit="contain" />
          <Image
            src="/safety/quality-management.png"
            height={400}
            width={400}
            objectFit="contain"
          />
          <Image
            src="/safety/certified-safety-group.png"
            height={400}
            width={400}
            objectFit="contain"
          />
          <Image
            src="/safety/strict-quality-checking.png"
            height={400}
            width={400}
            objectFit="contain"
          />
        </Grid>
        <Box as="article" my={16}>
          <Heading
            data-aos="flip-up"
            as="h2"
            textAlign="center"
            fontSize={{ base: 'xl', lg: '3xl' }}
          >
            Safety and Quality Method
          </Heading>
          <Center mt={8}>
            <Image
              data-aos="zoom-in"
              src="/safety/safety-logo.png"
              height={200}
              width={200}
              objectFit="contain"
            />
          </Center>
          <Grid templateColumns="1fr 1fr" gap={{ base: 4, lg: 8 }} mt={8}>
            {safetyAndQualityMethods.map(({ title, description }) => (
              <SafetyAndQualityMethodItem key={title} title={title} description={description} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}
