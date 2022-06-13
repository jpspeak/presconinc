import PropTypes from 'prop-types'

import { Box } from '@chakra-ui/react'

import isUrlVideoOrImage from '../../../utils/isUrlVideoOrImage'

export default function CarouselItem({ src }) {
  const type = isUrlVideoOrImage(src) === 'video' ? 'video' : 'img'
  return (
    <Box position="relative" pb="50%">
      <Box
        as={type}
        src={src}
        position="absolute"
        left="0"
        top="0"
        h="full"
        w="full"
        objectFit="contain"
        controls={type === 'video'}
        controlsList="nofullscreen noremoteplayback nodownload"
      />
    </Box>
  )
}

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired
}
