import { Box, Grid, Heading, StackDivider, Text, VStack } from '@chakra-ui/react'

import Image from 'next/image'

import Layout from '../../components/prescon-technology/Layout'
import BeamItem from '../../components/prescon-technology/post-tensioning/BeamItem'
import PostTensioningAdvantageItem from '../../components/prescon-technology/post-tensioning/PostTensioningAdvantageItem'
import PostTypeItem from '../../components/prescon-technology/post-tensioning/PostTypeItem'

import useAOS from '../../hooks/useAOS'

const beams = [
  {
    image: '/prescon-technology/diagram-1.png',
    text:
      'In a reinforced concrete beam, less than half the concrete is in compression, and cracks will appear in the bottom of the beam under full load.'
  },
  {
    image: '/prescon-technology/diagram-2.png',
    text:
      'When a concrete beam is pre-stressed, all the concrete acts in compression. The off-center location of the pre-stressing steel causes a camber in the beam.'
  },
  {
    image: '/prescon-technology/diagram-3.png',
    text:
      'Under loading, the pre-stressed beam becomes flatter, but all the concrete still acts in compression, and no cracks appear.'
  }
]

const postTypes = [
  {
    image: '/prescon-technology/multi-bulb-type.png',
    name: 'Multi-Bulb Type'
  },
  {
    image: '/prescon-technology/multi-loop-type.png',
    name: 'Multi-Loop Type'
  },
  {
    image: '/prescon-technology/prescon-type.png',
    name: 'Prescon Type'
  },
  {
    image: '/prescon-technology/double-lock-type.png',
    name: 'Double-Lock Type'
  }
]

const postTensioningAdvantages = [
  {
    image: '/prescon-technology/serviceability.png',
    label: 'SERVICEABILITY',
    advantages: [
      'More suitable for structures of long span and those carrying heavy loads because of the higher strengths of materials employed.',
      "Members are slender and adaptable to artistic treatment. They yield more clearance and don't crack under working loads. Whatever cracks may be developed under overloads will be closed as soon as the load is removed.",
      'Where limited height is required, more floors can be constructed because of shallower beams and slabs.',
      'Cranes and other heavy equipment are unnecessary.',
      'Waterproofing is not required for a two-way post-tensioned slab.'
    ]
  },
  {
    image: '/prescon-technology/safety.png',
    label: 'SAFETY',
    advantages: [
      'For many structures during post-tensioning, both steel and concrete are subjected to the highest stresses that will exist in them during their service period. Hence, if materials can stand post-tensioning, they are likely to possess sufficient strength for service loads.',
      'The ability to resist shock and impact loads and repeated working loads is as good in post-tensioned as in reinforced concrete. The resistance to corrosion is better than that of reinforced concrete for the same amount of cover, owing to the non-existence of cracks.',
      'Cast-in-place solid monolithic construction is completely safe and resistant to earthquakes.'
    ]
  },
  {
    image: '/prescon-technology/economics.png',
    label: 'ECONOMICS',
    advantages: [
      'Smaller quantities of materials, both steel and concrete, are required to carry the same loads since the materials are of higher strength.',
      'The reduced weight of members will help in economizing the cost of structures; the smaller dead load and section of the member will result in saving materials and labor such as the foundation, columns, shear walls, etc.',
      'No joints can be seen as it is a monolithic structure. Concrete topping is not required.',
      'Construction can be stopped at any floor which is automatically waterproofed when tendons are placed in both directions. Thus, there is no additional expense for the next phase of construction.'
    ]
  },
  {
    image: '/prescon-technology/speed.png',
    label: 'SPEED',
    advantages: [
      'Camber and deflection are reduced in a post-tensioned member at the service load. Construction is much faster than another system of construction because formwork can be removed after stressing usually after seven days.'
    ]
  }
]

export default function PostTensioning() {
  useAOS()
  return (
    <Layout>
      <Box as="video" mt={8} poster="/prescon-technology/post-tensioning-poster.png" controls>
        <track kind="captions" />
        <source
          src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/prescon-technology/post-tensioning-video.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Box>
      <Text
        data-aos="fade-up"
        maxW="container.sm"
        mt={8}
        mx="auto"
        textAlign="center"
        fontSize={{ base: 'xl', lg: '2xl' }}
      >
        &quot;A method of reinforcing or strengthening concrete or other materials with
        high-strength steel strands or bars typically referred to as tendons.&quot;
        <br />
        <strong>- Post-Tensioning Institute</strong>
      </Text>
      <Text data-aos="fade-up" as="section" mt={8} lineHeight={1.8}>
        To better understand post-tensioning, one must know the difference between reinforced and
        pre-stressed concrete. Concrete is very strong in compression but relatively weak in
        tension. These two utilize the structural capabilities of steel and concrete.
        <br />
        <br />
        The ordinary reinforced concrete beam supports a load by developing compressive stresses at
        the top, but since the concrete cannot resist the tension at the bottom, it cracks there.
        Reinforcing steel bars are placed within this tension zone to resist the tension and control
        the cracking.
        <br />
        <br />
        Pre-stressed concrete, however, involves the application of force or forces tending to bend
        and compress a concrete structure or structural element in order to counteract the bending
        which results from loading. The force applied is the tensioning or stretching of the steel
        component which is usually in the form of high-tensile strands, wires or bars.
      </Text>
      <VStack as="section" mt={8} spacing={4} divider={<StackDivider borderColor="gray.200" />}>
        {beams.map(({ image, text }) => (
          <BeamItem key={image} image={image} text={text} />
        ))}
      </VStack>
      <Box as="article" mt={8}>
        <Heading
          data-aos="flip-up"
          as="h2"
          my={4}
          fontSize={{ base: 'xl', lg: '2xl' }}
          textAlign="center"
        >
          TWO TYPES OF PRE-STRESSED CONCRETE
        </Heading>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4}>
          <Image
            data-aos="zoom-in"
            src="/prescon-technology/joel-filipe-processbuilding.png"
            height={1400}
            width={1000}
            objectFit="contain"
          />
          <VStack justifyContent="center" spacing={8} lineHeight={1.8}>
            <VStack data-aos="fade-up" alignItems="normal">
              <Text as="h3" fontWeight="bold">
                1) Pre-tension pre-stressed concrete
              </Text>
              <Text>
                The beams or elements are constructed on a stressing bed and stranded cable is
                placed between two buttresses anchored to a stressing bed which holds the force in
                the stretched cables. After stretching the steel with hydraulic jacks, concrete is
                placed in forms around the cables and allowed to harden. When the concrete reaches
                sufficient strength, the pre-stress force is transferred to the concrete by bond
                when the steel strand at the ends of the beam is cut loose from buttresses. It is
                usually fabricated away from the job site in a pre-stressing plant.
              </Text>
            </VStack>
            <VStack data-aos="fade-up" alignItems="normal">
              <Text as="h3" fontWeight="bold">
                2) Post-tension pre-stressed concrete
              </Text>
              <Text>
                The beams or elements are constructed on a stressing bed and stranded cable is
                placed between two buttresses anchored to a stressing bed which holds the force in
                the stretched cables. After stretching the steel with hydraulic jacks, concrete is
                placed in forms around the cables and allowed to harden. When the concrete reaches
                sufficient strength, the pre-stress force is transferred to the concrete by bond
                when the steel strand at the ends of the beam is cut loose from buttresses. It is
                usually fabricated away from the job site in a pre-stressing plant.
              </Text>
            </VStack>
          </VStack>
        </Grid>
      </Box>
      <Grid as="section" mt={8} templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
        {postTypes.map(({ image, name }) => (
          <PostTypeItem key={name} image={image} name={name} />
        ))}
      </Grid>
      <Box as="article" my={8}>
        <Heading
          data-aos="flip-up"
          as="h2"
          my={8}
          fontSize={{ base: 'xl', lg: '2xl' }}
          textAlign="center"
        >
          ADVANTAGES OF POST-TENSIONING
        </Heading>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          {postTensioningAdvantages.map(({ image, label, advantages }) => (
            <PostTensioningAdvantageItem
              key={label}
              image={image}
              label={label}
              advantages={advantages}
            />
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}
