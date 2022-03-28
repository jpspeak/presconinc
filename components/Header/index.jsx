import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { Box, Container, Flex, Icon, useBoolean, useBreakpointValue } from '@chakra-ui/react'
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'

import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  const [isOpen, setIsOpen] = useBoolean()
  const router = useRouter()

  const isScreenLg = useBreakpointValue({ lg: true })

  const toggleNav = () => {
    setIsOpen.toggle()
  }

  useEffect(() => {
    setIsOpen.off()
  }, [router])

  return (
    <Box bgColor="primary" py={2}>
      <Container
        maxW="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          w="full"
          justifyContent="space-between"
          direction={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'start', lg: 'center' }}
        >
          <Flex justifyContent="space-between" alignItems="center" w={{ base: 'full', lg: 'auto' }}>
            <Logo />
            {!isScreenLg && (
              <Icon
                as={isOpen ? SmallCloseIcon : HamburgerIcon}
                color="white"
                fontSize="4xl"
                cursor="pointer"
                onClick={toggleNav}
              />
            )}
          </Flex>
          <Nav isOpen={isOpen} />
        </Flex>
      </Container>
    </Box>
  )
}
