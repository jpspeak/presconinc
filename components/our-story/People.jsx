import { Box, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Image from 'next/image'
import useAOS from '../../hooks/useAOS'

export default function People({ image, message, name, department }) {
  useAOS()
  return (
    <Stack
      data-aos="fade-left"
      spacing={8}
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
    >
      <Box h={{ base: 200, lg: 300 }} w={{ base: 200, lg: 300 }} rounded="full" overflow="hidden">
        <Image src={image} height={400} width={400} objectFit="cover" objectPosition="top" />
      </Box>
      <VStack alignItems="normal" spacing={8} w={{ base: 'full', lg: '50%' }}>
        <Text as="q" lineHeight={1.5}>
          {message}
        </Text>
        <VStack
          alignItems="normal"
          divider={<StackDivider borderColor="primary" borderWidth={2} h={0} m="0 !important" />}
        >
          <Text fontWeight="semibold">{name}</Text>
          <Text fontSize="sm">{department}</Text>
        </VStack>
      </VStack>
    </Stack>
  )
}

People.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
}
