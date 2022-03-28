import { Link } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import stringToId from '../../utils/stringToId'

export default function NavItem({ label }) {
  return (
    <Link href={`#${stringToId(label)}`} p={4}>
      {label}
    </Link>
  )
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired
}
