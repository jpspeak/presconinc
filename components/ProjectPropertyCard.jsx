import { Box, Grid, Text, VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Image from 'next/image'

import useAOS from '../hooks/useAOS'

export default function ProjectPropertyCard({ image, alt, name, location, description }) {
  useAOS()
  return (
    <Grid
      as="article"
      data-aos="zoom-in"
      templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      shadow="xs"
    >
      <Image src={image} alt={alt} height={500} width={800} objectFit="cover" />
      <VStack p={4} alignItems="start" spacing={4}>
        <Box>
          <Text fontWeight="semibold">PROJECT NAME</Text>
          <Text>{name}</Text>
        </Box>
        <Box>
          <Text fontWeight="semibold">LOCATION</Text>
          <Text>{location}</Text>
        </Box>
        <Box>
          <Text fontWeight="semibold">DESCRIPTION</Text>
          <Text>{description}</Text>
        </Box>
      </VStack>
    </Grid>
  )
}

ProjectPropertyCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
