import { Stack, useBreakpointValue } from '@chakra-ui/react'

import { useRouter } from 'next/router'

import PropTypes from 'prop-types'

import NavItem from './NavItem'

const navItems = [
  {
    label: 'Our Story',
    href: '/our-story'
  },
  {
    label: 'GenCon',
    href: '/gencon'
  },
  {
    label: 'PRESCON Technology',
    href: '/prescon-technology/post-tensioning'
  },
  {
    label: 'Projects',
    href: '/projects/post-tensioning'
  },
  {
    label: 'Properties',
    href: '/properties/residential'
  },
  {
    label: 'Safety',
    href: '/safety'
  },
  {
    label: 'Contact Us',
    href: '/contact-us'
  }
]

export default function NavList({ isOpen }) {
  const router = useRouter()

  const isScreenLg = useBreakpointValue({ lg: true })

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      justifyContent="space-around"
      w={{ base: 'full', lg: 'auto' }}
      height={{ base: isOpen && !isScreenLg ? 400 : 0, lg: 'auto' }}
      overflow="hidden"
      transition="all .5s"
    >
      {navItems.map(({ href, label }) => (
        <NavItem key={label} href={href} label={label} isActive={router.pathname === href} />
      ))}
    </Stack>
  )
}

NavList.propTypes = {
  isOpen: PropTypes.bool.isRequired
}
