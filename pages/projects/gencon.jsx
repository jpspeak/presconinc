import { VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import { gql } from '@apollo/client'

import client from '../../graphql/apollo-client'

import ProjectPropertyCard from '../../components/ProjectPropertyCard'
import Layout from '../../components/projects/Layout'

export default function GenCon({ projects }) {
  const propjectsModified = projects?.map(project => ({
    ...project,
    image: process.env.NEXT_PUBLIC_API_SERVER_URL + project.image.url
  }))
  return (
    <Layout>
      <VStack spacing={4} mb={8}>
        {propjectsModified.map(({ name, location, description, image }) => (
          <ProjectPropertyCard
            key={name}
            alt={name}
            name={name}
            location={location}
            description={description}
            image={image}
          />
        ))}
      </VStack>
    </Layout>
  )
}

GenCon.propTypes = {
  projects: PropTypes.array.isRequired
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        projects(where: { category: { equals: "gencon" } }) {
          name
          location
          description
          image {
            url
          }
        }
      }
    `
  })
  return {
    props: {
      projects: data.projects || null
    },
    revalidate: 1
  }
}
