import { Grid, Text } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Image from 'next/image'

import useAOS from '../../../hooks/useAOS'

export default function BeamItem({ image, text }) {
  useAOS()
  return (
    <Grid key={image} templateColumns="1fr 1fr" gap={4} alignItems="center">
      <Image data-aos="zoom-in" src={image} height={200} width={400} objectFit="contain" />
      <Text data-aos="fade-up" lineHeight={1.8}>
        {text}
      </Text>
    </Grid>
  )
}

BeamItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
