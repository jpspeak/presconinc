import PropTypes from 'prop-types'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue
} from '@chakra-ui/react'

import { Carousel as ResposiveCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CarouselItem from './CarouselItem'
import CustomArrow from '../CustomArrow'

export default function FullscreenCarousel({ mediaUrls, currentIndex, onClose }) {
  const isLg = useBreakpointValue({ base: false, lg: true })

  return (
    <Modal isOpen onClose={onClose} isCentered size="5xl">
      <ModalOverlay bgColor="rgba(0,0,0,0.9)" />
      <ModalContent bgColor="transparent" shadow="none">
        <ModalCloseButton color="white" size="lg" />
        <ModalBody py="20" px="2" w="full">
          <ResposiveCarousel
            verticalSwipe={false}
            transitionTime={1000}
            stopOnHover
            swipeable
            emulateTouch
            showStatus={false}
            showThumbs={false}
            showArrows={isLg}
            selectedItem={currentIndex}
            renderArrowNext={(clickHandler, hasNext) => (
              <CustomArrow onClick={clickHandler} show={hasNext} />
            )}
            renderArrowPrev={(clickHandler, hasPrev) => (
              <CustomArrow onClick={clickHandler} show={hasPrev} type="prev" />
            )}
          >
            {mediaUrls?.map(src => (
              <CarouselItem key={src} src={src} />
            ))}
          </ResposiveCarousel>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

FullscreenCarousel.propTypes = {
  mediaUrls: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired
}
