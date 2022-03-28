import { HStack } from '@chakra-ui/react'

import { useRouter } from 'next/router'

import PropTypes from 'prop-types'

import NavItem from './NavItem'

export default function Nav({ navItems }) {
  const router = useRouter()
  return (
    <HStack as="nav">
      {navItems.map(({ href, label }) => (
        <NavItem key={label} href={href} label={label} isActive={router.pathname === href} />
      ))}
    </HStack>
  )
}

Nav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
}
