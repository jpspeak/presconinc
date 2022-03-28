import { Text, VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Image from 'next/image'

import useAOS from '../../../hooks/useAOS'

export default function AnchorTypeItem({ name, image }) {
  useAOS()
  return (
    <VStack data-aos="zoom-in">
      <Image src={image} height={500} width={900} objectFit="contain" />
      <Text py={2} fontWeight="semibold">
        {name}
      </Text>
    </VStack>
  )
}

AnchorTypeItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
