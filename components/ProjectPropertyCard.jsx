import PropTypes from 'prop-types'

import { Box, HStack, Icon, Image, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react'

import { BiMapAlt } from 'react-icons/bi'

import useAOS from '../hooks/useAOS'

import MediaCarousel from './MediaCarousel'
import GoogleMapModal from './GoogleMapModal'

export default function ProjectPropertyCard({
  mediaUrls,
  name,
  location,
  coordinates,
  description,
  bottomElement
}) {
  useAOS()
  const {
    isOpen: isOpenGoogleMap,
    onOpen: openGoogleMap,
    onClose: closeGoogleMap
  } = useDisclosure()

  const hasCoordinates = coordinates?.lat && coordinates?.lng
  const handleClickLocation = () => {
    if (hasCoordinates) {
      openGoogleMap()
    }
  }

  return (
    <>
      <VStack
        alignItems="normal"
        as="article"
        data-aos="zoom-in"
        border="1px"
        borderColor="gray.200"
      >
        <Box w="full">
          {mediaUrls.length > 0 ? (
            <MediaCarousel mediaUrls={mediaUrls} />
          ) : (
            <Box position="relative" pb="50%">
              <Image
                w="full"
                h="full"
                position="absolute"
                src="/static/placeholder-image.svg"
                objectFit="cover"
              />
            </Box>
          )}
        </Box>

        <VStack spacing="4" p="4" alignItems="start" justifyContent="start">
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <HStack
            onClick={handleClickLocation}
            spacing="1"
            alignItems="end"
            textDecor={hasCoordinates && 'underline'}
            cursor={hasCoordinates && 'pointer'}
          >
            <Text>
              {location} <Icon ml="1" as={BiMapAlt} verticalAlign="middle" />
            </Text>
          </HStack>
          <Text>{description}</Text>
        </VStack>
        <Spacer />
        <Box p="4">{bottomElement}</Box>
      </VStack>
      {isOpenGoogleMap && <GoogleMapModal onClose={closeGoogleMap} coordinates={coordinates} />}
    </>
  )
}

ProjectPropertyCard.propTypes = {
  mediaUrls: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  coordinates: PropTypes.object,
  description: PropTypes.string.isRequired,
  bottomElement: PropTypes.node
}
