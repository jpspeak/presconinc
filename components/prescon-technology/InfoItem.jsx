import { CheckCircleIcon } from '@chakra-ui/icons'
import { Heading, HStack, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import useAOS from '../../hooks/useAOS'

export default function InfoItem({ title, lists }) {
  useAOS()
  return (
    <VStack data-aos="zoom-in" alignItems="normal" shadow="xs" w="full" spacing={8} p={8}>
      <Heading as="h3" fontSize={{ base: 'xl', lg: '2xl' }}>
        {title}
      </Heading>
      <List spacing={3}>
        {lists.map(list => (
          <ListItem key={list}>
            <HStack alignItems="center">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <Text>{list}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  )
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf(PropTypes.string).isRequired
}
