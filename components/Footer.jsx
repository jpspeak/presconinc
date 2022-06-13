import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <Box as="footer" py={10} px={4} bgColor="primary" color="white">
      <Flex
        justifyContent="space-evenly"
        height={{ base: 200, lg: 'auto' }}
        direction={{ base: 'column', lg: 'row' }}
        textAlign="center"
        alignItems="center"
      >
        <Text>(+632) 8531 4971</Text>
        <Text as="address">711 Nueve de Febrero Street, Mandaluyong City, Philippines</Text>
        <Text>Ⓒ Prescon Philippines Inc. 2020</Text>
        <HStack>
          <SocialIcon url="https://facebook.com/presconphil" bgColor="#1B74E4" />
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://instagram.com/" />
        </HStack>
      </Flex>
    </Box>
  )
}
