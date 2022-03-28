import { Text } from '@chakra-ui/react'

import Link from 'next/link'

import propTypes from 'prop-types'

export default function NavItem({ href, label, isActive }) {
  return (
    <Link href={href}>
      <Text
        cursor="pointer"
        color="white"
        borderWidth={1}
        borderColor={isActive ? 'white' : 'transparent'}
        p={2}
        fontWeight="semibold"
      >
        {label}
      </Text>
    </Link>
  )
}

NavItem.propTypes = {
  href: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  isActive: propTypes.bool
}

NavItem.defaultProps = {
  isActive: false
}
