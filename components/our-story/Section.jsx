import { Box, Heading } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import stringToId from '../../utils/stringToId'
import useHash from '../../hooks/useHash'

import useAOS from '../../hooks/useAOS'

export default function Section({ title, children }) {
  const [hash] = useHash()
  useAOS()
  return (
    <Box
      as="section"
      borderLeft="8px"
      borderColor="primary"
      pl={12}
      position="relative"
      lineHeight={1.8}
      id={stringToId(title)}
    >
      <Box
        h="40px"
        w="40px"
        border="8px solid"
        borderColor="primary"
        rounded="full"
        position="absolute"
        top={0}
        bgColor={hash === `#${stringToId(title)}` ? 'primary' : 'white'}
        left="-24px"
      />
      <Heading data-aos="flip-up" as="h2" fontSize={{ base: 'xl', lg: '3xl' }}>
        {title}
      </Heading>
      <Box py={12}>{children}</Box>
    </Box>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}
