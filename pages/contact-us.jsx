import { Container, Grid } from '@chakra-ui/react'

import Head from 'next/head'

import ContactForm from '../components/contact-us/ContactForm'
import ContactInfo from '../components/contact-us/ContactInfo'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Prescon</title>
      </Head>
      <Container as="main" maxW="container.lg">
        <Grid my={8} templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <ContactInfo />
          <ContactForm />
        </Grid>
      </Container>
    </>
  )
}
