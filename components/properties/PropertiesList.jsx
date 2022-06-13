import PropTypes from 'prop-types'

import { Grid, Tag, Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'

import useProperties from '../../hooks/useProperties'

import ProjectPropertyCard from '../ProjectPropertyCard'
import LoadingSpinner from '../LoadingSpinner'

export default function PropertiesList({ initialData = [] }) {
  const router = useRouter()
  const { properties, propertiesError } = useProperties(initialData, router.query)
  if (propertiesError) return null
  if (!properties) return <LoadingSpinner />
  if (properties?.length === 0) return <Text>No Records Found</Text>
  return (
    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap="4">
      {properties.map(({ _id, name, location, coordinates, description, media, category }) => (
        <ProjectPropertyCard
          key={_id}
          name={name}
          location={location}
          coordinates={coordinates}
          description={description}
          mediaUrls={media.map(
            filename => `${process.env.NEXT_PUBLIC_STORAGE_URL}/properties/${filename}`
          )}
          bottomElement={
            <Tag size="sm" whiteSpace="nowrap" mr="2" mt="2">
              {category}
            </Tag>
          }
        />
      ))}
    </Grid>
  )
}

PropertiesList.propTypes = {
  initialData: PropTypes.array
}
