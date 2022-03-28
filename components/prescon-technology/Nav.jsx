import { Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NavItem from './NavItem'

const navItems = [
  { href: '/prescon-technology/post-tensioning', label: 'POST-TENSIONING' },
  { href: '/prescon-technology/rock-and-soil', label: 'ROCK & SOIL' },
  { href: '/prescon-technology/lift-slab', label: 'LIFT SLAB' },
  { href: '/prescon-technology/flat-plate', label: 'FLAT PLATE' }
]

export default function Nav() {
  const router = useRouter()

  return (
    <Stack
      as="nav"
      direction={{ base: 'column', lg: 'row' }}
      spacing={4}
      justifyContent="space-around"
    >
      {navItems.map(({ href, label }) => (
        <NavItem key={href} href={href} label={label} isActive={router.pathname === href} />
      ))}
    </Stack>
  )
}
