import { Box, Grid, Text } from '@chakra-ui/react'

import Image from 'next/image'

import Layout from '../../components/prescon-technology/Layout'
import AnchorTypeItem from '../../components/prescon-technology/rock-and-soil/AnchorTypeItem'

import useAOS from '../../hooks/useAOS'

const anchorTypes = [
  {
    image: '/prescon-technology/rock-and-soil-anchor-permanent.png',
    name: 'Permanent'
  },
  {
    image: '/prescon-technology/rock-and-soil-anchor-temporary.png',
    name: 'Temporary'
  }
]

export default function RockAndSoil() {
  useAOS()
  return (
    <Layout>
      <Box mt={8}>
        <Image
          src="/prescon-technology/gencon-header-ricardo-gomez-angel.png"
          height={500}
          width={1000}
        />
      </Box>
      <Text data-aos="fade-up" mt={8} lineHeight={1.8}>
        Soil or rock anchors, also known as ground anchors are most commonly used for geotechnical
        and construction applications. Coming in many shapes and sizes, ground anchors generally
        consist of steel elements (bars or strands) grouted in a drilled hole.
        <br />
        <br />
        More specifically, it consists of a tendon-assembly of pre-stressing steel, either steel
        bars or a group of high-tensile steel strands with corrosion protection, bond breakers,
        spacers and centralizers and an anchorage composed of bearing plate, anchor block (wedge
        plate) with wedges capable of transmitting the pre-stressing force from the steel to the
        surface of the ground or the supported structure. Ground anchors are also referred to as
        &quot;tiebacks&quot; because they tie the load back to the rock or soil material.
        <br />
        <br />
        Permanent and Temporary Rock and Soil Anchors are all available at Prescon. The company
        provides full design and installation except for drilling services and long-term monitoring.
        For some applications, removable anchors or those capable of being re-stressed and
        de-stressed can be provided.
      </Text>

      <Grid as="section" my={8} templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
        {anchorTypes.map(({ image, name }) => (
          <AnchorTypeItem key={name} image={image} name={name} />
        ))}
      </Grid>
    </Layout>
  )
}
