import { Box, Center, Grid, Text } from '@chakra-ui/react'

import Image from 'next/image'

import Layout from '../../components/prescon-technology/Layout'
import InfoItem from '../../components/prescon-technology/InfoItem'

import useAOS from '../../hooks/useAOS'

const liftSlabInfos = [
  {
    title: 'ADVANTAGES',
    lists: [
      'Convenience',
      'Increased productivity',
      'Better supervision of labor',
      'Enormous reduction in lost time',
      'Extremely economical'
    ]
  },
  {
    title: 'APPLICATIONS',
    lists: ['Housing', 'Multi-storey car parks', 'Heavy lifting', 'Medium-rise buildings']
  }
]

export default function ListSlab() {
  useAOS()
  return (
    <Layout>
      <Box
        as="video"
        mt={8}
        width="full"
        poster="/prescon-technology/lift-slab-poster.png"
        controls
      >
        <track kind="captions" />
        <source
          src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/prescon-technology/lift-slab-video.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Box>
      <Text data-aos="fade-up" mt={8} lineHeight={1.8}>
        Prescon is proud to be the first and the only lift-slab provider in the country.
        <br />
        <br />
        Lift Slab was developed to provide a fast and economical method of building construction in
        which the reinforced concrete floor and foot-slab of a multi-storey structure is cast around
        its column at ground level using a separating membrane between each slab and employing the
        ground floor as the initial soffit form. After the slabs have matured, they are lifted by
        hydraulic jacks to their correct position and then permanently connected to the columns.
      </Text>
      <Grid as="section" mt={8} templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
        {liftSlabInfos.map(({ title, lists }) => (
          <InfoItem key={title} title={title} lists={lists} />
        ))}
      </Grid>
      <Center mt={1} mb={8}>
        <Image
          src="/prescon-technology/lift-slab-b.png"
          height={500}
          width={500}
          objectFit="contain"
        />
      </Center>
    </Layout>
  )
}
