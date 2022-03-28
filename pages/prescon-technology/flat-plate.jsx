import { Box, Heading, HStack, StackDivider, Text, VStack } from '@chakra-ui/react'

import Image from 'next/image'
import InfoItem from '../../components/prescon-technology/InfoItem'

import Layout from '../../components/prescon-technology/Layout'

import useAOS from '../../hooks/useAOS'

const flatPlateInfo = {
  title: 'ADVANTAGES',
  lists: [
    'No beams or girders resulting to the simplified installation of reinforcing bars and ease of formworks.',
    'Suitability of slab soffits being used as a ceiling.',
    'Reduced floor-to-floor height due to minimum structural depth.',
    'Reduced construction time.'
  ]
}

export default function FlatPlate() {
  useAOS()
  return (
    <Layout>
      <Box mt={8}>
        <Image src="/prescon-technology/flat-plate.png" height={500} width={1000} />
      </Box>
      <Text data-aos="fade-up" mt={8} lineHeight={1.8}>
        Flat Plate is a two-way reinforced concrete framing system of uniform slab thickness usually
        with no beams or girders. Gravity loads are transferred by the slab itself to the columns
        while lateral loads are resisted by reinforced concrete walls.
        <br />
        <br />
        The principal feature of the flat plate floor system is its uniform or nearly uniform
        thickness, thus, requiring only simple formwork resulting in ease of construction.
      </Text>
      <Box as="section" mt={8}>
        <InfoItem title={flatPlateInfo.title} lists={flatPlateInfo.lists} />
      </Box>
      <Box as="article" my={8}>
        <Heading
          data-aos="flip-up"
          as="h2"
          my={8}
          textAlign="center"
          fontSize={{ base: 'xl', lg: '2xl' }}
        >
          DIFFERENCE BETWEEN FLAT PLATE AND FLAT SLAB
        </Heading>
        <HStack divider={<StackDivider borderColor="gray.200" />} alignItems="start">
          <VStack data-aos="zoom-in" w="50%">
            <Image
              src="/prescon-technology/flat-plate-edit.png"
              height={300}
              width={300}
              objectFit="contain"
            />
            <Text lineHeight={1.8}>
              <strong>Flat plate</strong> is a two-way reinforced concrete framing system of uniform
              slab thickness.
            </Text>
          </VStack>
          <VStack data-aos="zoom-in" w="50%">
            <Image
              src="/prescon-technology/flat-slab-edit.png"
              height={300}
              width={300}
              objectFit="contain"
            />
            <Text textAlign="center" lineHeight={1.8}>
              <strong>Flat slab</strong> is a two-way reinforced structural system that includes
              either drop panels or column capitals at columns to resist heavier loads and thus
              permit longer spans.
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Layout>
  )
}
