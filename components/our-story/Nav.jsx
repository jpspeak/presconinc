import { StackDivider, VStack } from '@chakra-ui/react'
import NavItem from './NavItem'

const navItems = [
  'HISTORY',
  'MEET THE FOUNDER',
  'OUR CONCEPT OF SERVICE',
  'VISION',
  'MISSION',
  'OUR PEOPLE'
]

export default function Nav() {
  return (
    <VStack
      alignItems="normal"
      divider={<StackDivider borderColor="gray.200" />}
      position="sticky"
      top={6}
      fontWeight="semibold"
    >
      {navItems.map(navItem => (
        <NavItem key={navItem} label={navItem} />
      ))}
    </VStack>
  )
}
