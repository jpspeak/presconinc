import PropTypes from 'prop-types'

import { useBreakpointValue } from '@chakra-ui/react'

import { useState } from 'react'

import { Carousel as ResposiveCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CarouselItem from './CarouselItem'

import FullscreenCarousel from './FullscreenCarousel'
import CustomArrow from './CustomArrow'

export default function MediaCarousel({ mediaUrls }) {
  const isLg = useBreakpointValue({ base: false, lg: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpenFullscreen, setIsOpenFullscreen] = useState(false)

  const handleClickItem = index => {
    setCurrentIndex(index)
    setIsOpenFullscreen(true)
  }
  const handleCloseFullscreen = () => {
    setIsOpenFullscreen(false)
  }
  return (
    <>
      <ResposiveCarousel
        verticalSwipe={false}
        transitionTime={1000}
        stopOnHover
        swipeable
        emulateTouch
        showStatus={false}
        showThumbs={false}
        showArrows={isLg}
        onClickItem={handleClickItem}
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
      {isOpenFullscreen && (
        <FullscreenCarousel
          mediaUrls={mediaUrls}
          currentIndex={currentIndex}
          onClose={handleCloseFullscreen}
        />
      )}
    </>
  )
}

MediaCarousel.propTypes = {
  mediaUrls: PropTypes.array.isRequired
}
