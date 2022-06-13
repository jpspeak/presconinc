import PropTypes from 'prop-types'

import { Icon } from '@chakra-ui/react'

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'

export default function CustomArrow({ onClick, show, type = 'next' }) {
  return (
    <Icon
      position="absolute"
      top="50%"
      transform="auto"
      translateY="-50%"
      right={type === 'next' && '0'}
      left={type === 'prev' && '0'}
      zIndex="2"
      as={type === 'next' ? BiChevronRight : BiChevronLeft}
      color="white"
      fontSize="4xl"
      bgColor="rgba(0,0,0,0.8)"
      cursor="pointer"
      onClick={onClick}
      display={show ? 'block' : 'none'}
    />
  )
}

CustomArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['prev', 'next'])
}
