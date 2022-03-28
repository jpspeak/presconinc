import { Text, VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import useAOS from '../../hooks/useAOS'

export default function SafetyAndQualityMethodItem({ title, description }) {
  useAOS()
  return (
    <VStack data-aos="zoom-in" shadow="xs" p={4} alignItems="normal">
      <Text as="h3" fontWeight="bold" fontSize={{ base: 'lg', lg: '2xl' }}>
        {title}
      </Text>
      <Text lineHeight={1.8}>{description}</Text>
    </VStack>
  )
}

SafetyAndQualityMethodItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
