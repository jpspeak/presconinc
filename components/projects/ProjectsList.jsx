import PropTypes from 'prop-types'

import { Flex, Grid, Tag, Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'

import useProjects from '../../hooks/useProjects'

import ProjectPropertyCard from '../ProjectPropertyCard'
import LoadingSpinner from '../LoadingSpinner'

export default function ProjectsList({ initialData = [] }) {
  const router = useRouter()
  const { projects, projectsError } = useProjects(initialData, router.query)
  if (projectsError) return null
  if (!projects) return <LoadingSpinner />
  if (projects?.length === 0) return <Text>No Records Found</Text>
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      gap="4"
      autoRows="minmax(min-content, max-content)"
    >
      {projects.map(
        ({
          _id,
          name,
          location,
          coordinates,
          description,
          media,
          types,
          category,
          subcategory
        }) => (
          <ProjectPropertyCard
            key={_id}
            name={name}
            location={location}
            coordinates={coordinates}
            description={description}
            types={types}
            mediaUrls={media.map(
              filename => `${process.env.NEXT_PUBLIC_STORAGE_URL}/projects/${filename}`
            )}
            bottomElement={
              <Flex flexWrap="wrap">
                {[category, subcategory, ...types].map((tag, i) => (
                  <Tag key={i} size="sm" whiteSpace="nowrap" mr="2" mt="2">
                    {tag}
                  </Tag>
                ))}
              </Flex>
            }
          />
        )
      )}
    </Grid>
  )
}

ProjectsList.propTypes = {
  initialData: PropTypes.array
}
