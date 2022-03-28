import { Box, Flex, Heading, HStack, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

import PropTypes from 'prop-types'

import Image from 'next/image'

import useAOS from '../../../hooks/useAOS'

export default function PostTensioningAdvantageItem({ image, label, advantages }) {
  useAOS()
  return (
    <Box data-aos="zoom-in" shadow="base" overflow="hidden">
      <Flex position="relative">
        <Heading
          as="h3"
          position="absolute"
          zIndex={2}
          top="50%"
          transform="auto"
          translateY="-50%"
          textAlign="center"
          w="full"
          color="white"
        >
          {label}
        </Heading>
        <Box h="full" w="full" position="absolute" zIndex={1} bgColor="rgba(0,0,0,0.5)" />
        <Image src={image} height={500} width={1000} objectFit="cover" />
      </Flex>
      <List p={4} spacing={3}>
        {advantages.map(advantage => (
          <ListItem key={advantage}>
            <HStack alignItems="start">
              <ListIcon as={CheckCircleIcon} color="green.500" mt={1.5} />
              <Text fontSize="sm" lineHeight={1.8}>
                {advantage}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

PostTensioningAdvantageItem.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  advantages: PropTypes.arrayOf(PropTypes.string).isRequired
}
