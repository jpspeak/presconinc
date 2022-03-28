import { Text } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import Link from 'next/link'

export default function NavItem({ href, label, isActive }) {
  return (
    <Link href={href}>
      <Text
        cursor="pointer"
        fontWeight="semibold"
        border="2px"
        px={4}
        py={2}
        w="full"
        borderColor={isActive ? 'primary' : 'transparent'}
        textAlign="center"
      >
        {label}
      </Text>
    </Link>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}
