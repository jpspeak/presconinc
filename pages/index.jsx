import { Box } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Head from 'next/head'

import Carousel from '../components/home/Carousel'

export default function Home({ carouselItems = [] }) {
  const carouselItemsModified = carouselItems?.map(({ image, title, subtitle }) => ({
    image: `${process.env.NEXT_PUBLIC_STORAGE_URL}/home-carousel-items/${image}`,
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
  carouselItems: PropTypes.array
}

export async function getStaticProps() {
  const carouselItemsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/home-carousel-items`
  )
  const carouselItems = await carouselItemsRes.json()
  return {
    props: {
      carouselItems: carouselItems || null
    },
    revalidate: 1
  }
}
