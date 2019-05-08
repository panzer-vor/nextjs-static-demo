import React, { useState, useEffect } from 'react'
import { throttle } from '@lib/util'
import { IList } from '@interface/components'

interface IElements {
  key: string
  element: HTMLElement
}

export default ({
  list,
  navElements,
  children
}: {
  list: IList[]
  navElements: {
    title: JSX.Element
    item: Function
    wrapper: Function
  }
  children: JSX.Element
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const setActiveWithScroll = (elements: IElements[]) => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let setFirstActive = true
    elements.forEach((v, i) => {
      if (v.element.offsetTop > scrollTop && setFirstActive) {
        setCurrentItemIndex(i)
        setFirstActive = false
      }
    })
  }
  useEffect(() => {
    const elements: IElements[] = list.map(v => {
      const element: HTMLElement = document.querySelector(`[title=tag-${v.key}]`)
      return {
        key: v.key,
        element,
      }
    })
    window.addEventListener('scroll',throttle(setActiveWithScroll.bind(this, elements), 100))
  }, [])
  const getOffsetTop = (index: number) => {
    return () => {
      const name = list[index].key
      const element: HTMLElement = document.querySelector(`[title=tag-${name}]`);
      const elementTop = element.offsetTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      window.scrollTo({
        top: elementTop - 30,
        left: 0,
        behavior: 'smooth'
      })
      if (elementTop > scrollTop) {
        setCurrentItemIndex(index)
      }
    }
  }
  return (
    <>
      <navElements.wrapper>
        {navElements.title}
        {
          list.map((v, i) => (
            <navElements.item
              isActive={i === currentItemIndex}
              key={v.key}
              onClick={getOffsetTop(i)}
            >{v.name}</navElements.item>
          ))
        }
      </navElements.wrapper>
      {children}
    </>
  )

}