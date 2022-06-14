import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import PropTypes from 'prop-types'

import { Carousel as ResposiveCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function CarouselItem({ image, title, subtitle }) {
  return (
    <Box
      as="article"
      width="full"
      height={{ base: '50vh', lg: '90vh' }}
      position="relative"
      cursor="all-scroll"
    >
      <Image src={image} layout="fill" objectFit="cover" />
      <Flex
        bgColor="rgba(0,0,0,0.5)"
        bottom={0}
        position="absolute"
        zIndex={2}
        color="white"
        w="full"
        py={{ base: 6, lg: 10 }}
        px={4}
        direction="column"
        justifyContent="end"
      >
        <Heading fontSize={{ base: 'md', lg: '2xl' }}>{title}</Heading>
        <Text mt={4} fontSize={{ base: 'sm', lg: 'md' }}>
          {subtitle}
        </Text>
      </Flex>
    </Box>
  )
}

CarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default function Carousel({ carouselItems = [] }) {
  return (
    <ResposiveCarousel
      verticalSwipe={false}
      autoPlay
      interval={5000}
      transitionTime={1000}
      stopOnHover
      swipeable
      emulateTouch
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      {carouselItems?.map(({ image, title, subtitle }) => (
        <CarouselItem key={title} image={image} title={title} subtitle={subtitle} />
      ))}
    </ResposiveCarousel>
  )
}

Carousel.propTypes = {
  carouselItems: PropTypes.array
}
