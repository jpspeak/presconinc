import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

import Layout from '../components/properties/Layout'
import useProperties from '../hooks/useProperties'
import PropertiesList from '../components/properties/PropertiesList'

export default function Properties({ propertiesInitialData }) {
  const router = useRouter()
  const { properties } = useProperties(propertiesInitialData, router.query)

  return (
    <Layout>
      <PropertiesList initialData={properties} />
    </Layout>
  )
}

Properties.propTypes = {
  propertiesInitialData: PropTypes.array.isRequired
}

export async function getStaticProps() {
  const propertiesRes = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/properties`)
  const properties = await propertiesRes.json()
  return {
    props: {
      propertiesInitialData: properties || null
    },
    revalidate: 1
  }
}
