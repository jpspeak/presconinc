import PropTypes from 'prop-types'

import { BiFilterAlt } from 'react-icons/bi'

import { useRouter } from 'next/router'

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton
} from '@chakra-ui/react'

import Filter from './Filter'

export default function FilterModal({ isOpen, onOpen, onClose }) {
  const router = useRouter()
  const isFiltered = router.query.category || router.query.subcategory || router.query.types
  return (
    <>
      <IconButton
        onClick={onOpen}
        position="fixed"
        zIndex="2"
        left="0"
        roundedLeft="none"
        icon={<BiFilterAlt />}
        colorScheme={isFiltered ? 'blue' : 'gray'}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody p="0">
            <Filter />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}
