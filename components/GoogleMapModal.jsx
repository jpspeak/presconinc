import PropTypes from 'prop-types'

import {
  Box,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import GoogleMapReact from 'google-map-react'

import { HiLocationMarker } from 'react-icons/hi'

export default function GoogleMapModal({ onClose, coordinates = null }) {
  return (
    <Modal isOpen onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent mx="4">
        <ModalHeader fontSize="sm">{`${coordinates.lat}, ${coordinates.lng}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="2" pt="0" px="2">
          <Box h="400px">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyD-Kfvr_IJUdFF3ZpfH7cSPC3h5dSKw124' }}
              defaultCenter={{ lat: coordinates.lat, lng: coordinates.lng }}
              defaultZoom={8}
              options={{ draggableCursor: 'pointer' }}
            >
              {coordinates && (
                <Box position="relative" lat={coordinates.lat} lng={coordinates.lng}>
                  <Icon
                    position="absolute"
                    bottom="0"
                    left="-30px"
                    color="red.500"
                    fontSize="6xl"
                    as={HiLocationMarker}
                  />
                </Box>
              )}
            </GoogleMapReact>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

GoogleMapModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  coordinates: PropTypes.object
}
