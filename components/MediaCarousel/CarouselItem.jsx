import PropTypes from 'prop-types'

import { Box, Icon } from '@chakra-ui/react'

import { BiPlayCircle } from 'react-icons/bi'

import isUrlVideoOrImage from '../../utils/isUrlVideoOrImage'

export default function CarouselItem({ src }) {
  const type = isUrlVideoOrImage(src) === 'video' ? 'video' : 'img'
  return (
    <Box position="relative" pb="50%" cursor="pointer">
      <Box
        as={type}
        src={src}
        position="absolute"
        left="0"
        top="0"
        h="full"
        w="full"
        objectFit="cover"
      />

      <Icon
        as={BiPlayCircle}
        fontSize="8xl"
        position="absolute"
        color="white"
        zIndex="2"
        top="50%"
        left="50%"
        transform="auto"
        translateX="-50%"
        translateY="-50%"
        display={type === 'video' ? 'block' : 'none'}
        bgColor="rgba(0,0,0,0.3)"
        rounded="full"
      />
    </Box>
  )
}

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired
}
