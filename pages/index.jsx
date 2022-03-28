import { gql } from '@apollo/client'
import { Box } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Head from 'next/head'

import Carousel from '../components/home/Carousel'
import client from '../graphql/apollo-client'

export default function Home({ carouselItems }) {
  const carouselItemsModified = carouselItems?.map(({ image, title, subtitle }) => ({
    image: process.env.NEXT_PUBLIC_API_SERVER_URL + image.url,
    title,
    subtitle
  }))
  return (
    <>
      <Head>
        <title>Philippines | Prescon</title>
        <meta
          name="description"
          content="Prescon's product is the supply and installation of post-tensioning tendons and accessories."
        />
        <meta name="keywords" content="Post-Tensioning" />
      </Head>
      <Box as="main">
        <Carousel carouselItems={carouselItemsModified} />
      </Box>
    </>
  )
}

Home.propTypes = {
  carouselItems: PropTypes.array.isRequired
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        carouselItems {
          image {
            url
          }
          title
          subtitle
        }
      }
    `
  })
  return {
    props: {
      carouselItems: data.carouselItems || null
    },
    revalidate: 1
  }
}
