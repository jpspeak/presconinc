import PropTypes from 'prop-types'

import { Button, HStack } from '@chakra-ui/react'

import { useRouter } from 'next/router'

export default function FilterNav({ filters, filterName, ...props }) {
  const router = useRouter()

  const handleClickFilter = filter => {
    router.replace(
      {
        query: { [filterName]: filter }
      },
      undefined,
      { shallow: true }
    )
  }

  const handleClickAll = () => {
    router.replace(
      {
        query: {}
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <HStack p="4" w="full" overflow="auto" my="4" {...props}>
      <Button
        onClick={handleClickAll}
        colorScheme={router.query[filterName] === undefined ? 'blackAlpha' : 'gray'}
        rounded="full"
        px="8"
      >
        All
      </Button>
      {filters.map((filter, i) => (
        <Button
          key={i}
          onClick={() => handleClickFilter(filter)}
          colorScheme={router.query[filterName] === filter ? 'blackAlpha' : 'gray'}
          rounded="full"
          px="8"
        >
          {filter}
        </Button>
      ))}
    </HStack>
  )
}

FilterNav.propTypes = {
  filters: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired
}
