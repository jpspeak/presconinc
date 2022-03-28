import { Text, VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Image from 'next/image'

import useAOS from '../../../hooks/useAOS'

export default function PostTypeItem({ name, image }) {
  useAOS()
  return (
    <VStack data-aos="zoom-in">
      <Image src={image} height={500} width={1000} objectFit="contain" />
      <Text as="h3" py={2} fontWeight="semibold">
        {name}
      </Text>
    </VStack>
  )
}

PostTypeItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
