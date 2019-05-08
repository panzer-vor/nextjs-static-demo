import { useState, useEffect, useRef, useCallback } from "react";
import { StyledComponent } from 'styled-components'
import { Swiper } from '@components/style'

export default ({
  childList,
  time = 5000,
  Controllor,
  hoverStop = false,
}: {
  childList: JSX.Element[]
  time?: number
  Controllor?: {
    Navigation?: {
      activePoint: StyledComponent<any, any, {}, never>
      wrapper: StyledComponent<any, any, {}, never>
      defalutPoint: StyledComponent<any, any, {}, never>
      icon?: StyledComponent<any, any, {}, never>
    },
    Pagination?: {
      leftItem: StyledComponent<any, any, {}, never>
      rightItem: StyledComponent<any, any, {}, never>
    }
  },
  hoverStop?: boolean
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { Navigation, Pagination } = Controllor
  const timer = useRef(0)
  const { length } = childList
  const setItemChange = (index: number, pagination: number = 1) => {
    if (pagination === 0) {
      setCurrentIndex(index)
    } else {
      setCurrentIndex(() => index >= length - 1 ? 0 : index + pagination)
    }
  }
  const setNewSwiperTimer = () => {
    timer.current = setTimeout(() => {
      setItemChange(currentIndex)
    }, time)
  }
  useEffect(() => {
    setNewSwiperTimer()
    return () => clearTimeout(timer.current)
  }, [currentIndex])

  const handleItemChange = useCallback((index: number, pagination: number = 1) => () => {
      clearTimeout(timer.current)
      setItemChange(index, pagination)
  }, [])
  const handleHover = useCallback(() => {
    if (hoverStop) {
      clearTimeout(timer.current)
    }
  }, [])
  const handleHoverleave = useCallback(() => {
    if (hoverStop) {
      setNewSwiperTimer()
    }
  }, [])
  return (
    <Swiper.wrapper>
      <Swiper.view
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverleave}
      >
        <Swiper.container itemLength={length} currentIndex={currentIndex} transitionTime={1}>
          {
            childList.map((v:JSX.Element) => v)
          }
        </Swiper.container>
        {
          Navigation && <Navigation.wrapper>
            {
              new Array(length).fill('swiper').map((v: string, i) => i === currentIndex ? (
                <Navigation.activePoint
                  key={`${v}${i}`}
                >{Navigation.icon && <Navigation.icon />}</Navigation.activePoint>
              ) : (
                <Navigation.defalutPoint
                  key={`${v}${i}`}
                  onClick={handleItemChange(i, 0)}
                >
                  {Navigation.icon && <Navigation.icon />}
                </Navigation.defalutPoint>
              ))
            }
          </Navigation.wrapper>
        }
      </Swiper.view>
      {
        Pagination && <Pagination.leftItem onClick={handleItemChange(currentIndex, -1)} />
      }
      {
        Pagination && <Pagination.rightItem onClick={handleItemChange(currentIndex, 1)} />
      }
    </Swiper.wrapper>
  )
}