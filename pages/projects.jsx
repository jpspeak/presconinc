import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

import useProjects from '../hooks/useProjects'

import Layout from '../components/projects/Layout'
import ProjectsList from '../components/projects/ProjectsList'

export default function Projects({ projectsInitialData }) {
  const router = useRouter()
  const { projects } = useProjects(projectsInitialData, router.query)

  return (
    <Layout>
      <ProjectsList initialData={projects} />
    </Layout>
  )
}

Projects.propTypes = {
  projectsInitialData: PropTypes.array.isRequired
}

export async function getStaticProps() {
  const projectsRes = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/projects`)
  const projects = await projectsRes.json()
  return {
    props: {
      projectsInitialData: projects || null
    },
    revalidate: 1
  }
}
