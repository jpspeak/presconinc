import { VStack } from '@chakra-ui/react'

import PropTypes from 'prop-types'

import { gql } from '@apollo/client'

import client from '../../graphql/apollo-client'

import ProjectPropertyCard from '../../components/ProjectPropertyCard'
import Layout from '../../components/properties/Layout'

export default function Commercial({ properties }) {
  const propertiesModified = properties?.map(property => ({
    ...property,
    image: process.env.NEXT_PUBLIC_API_SERVER_URL + property.image.url
  }))
  return (
    <Layout>
      <VStack spacing={4} mt={8}>
        {propertiesModified?.map(({ name, location, description, image }) => (
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

Commercial.propTypes = {
  properties: PropTypes.array.isRequired
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        properties(where: { category: { equals: "commercial" } }) {
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
      properties: data.properties || null
    },
    revalidate: 1
  }
}
