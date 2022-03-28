import { Box } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Image from 'next/image'

import AnimatedText from 'react-animated-text-content'

export default function PageBanner({ title, image }) {
  const titleStyle = {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    transform: 'translate(0, -50%)',
    color: 'white',
    fontSize: 'inherit',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
  }

  return (
    <Box
      w="full"
      h={{ base: '30vh', lg: '100vh' }}
      position="relative"
      fontSize={{ base: '2xl', lg: '8xl' }}
    >
      <Box position="absolute" zIndex={1} w="full" h="full" bgColor="rgba(0,0,0,0.7)" />
      <AnimatedText
        type="chars"
        animationType="rifle"
        interval={0.06}
        duration={0.1}
        tag="h1"
        style={titleStyle}
      >
        {title.toUpperCase()}
      </AnimatedText>
      <Image src={image} objectFit="cover" layout="fill" priority />
    </Box>
  )
}

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
