import { useEffect, useState, useCallback } from 'react'
import styled from "styled-components"
import { sliceArray } from '@lib/util'
import { pipe, curry } from 'ramda'

interface ICardWrapperProps {
  h?: number
  t?: number
  l?: number
  w: number
}

interface IElementProps {
  el: HTMLElement
  height: number
}

interface IFormatedELementProps extends IElementProps {
  left: number
  top: number
}

const CardContainer = styled.div`
  ${(props: ICardWrapperProps) => {
    if (props.h || props.t || props.l) {
      return 'position: absolute;'
    }
  }}
  width: ${(props: ICardWrapperProps) => props.w}%;
  height: ${(props: ICardWrapperProps) => props.h}px;
  top: ${(props: ICardWrapperProps) => props.t}px;
  left: ${(props: ICardWrapperProps) => props.l}%;
`

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  height: ${(props: {height: number}) => props.height}px
`

const getElementsArray = (className: string): HTMLElement[] => Array.from(document.querySelectorAll(className))

const getElementsHeight = curry((listElements: JSX.Element[], els: HTMLElement[]) => els.map((v, i) => ({
  height: v.offsetHeight,
  el: listElements[i],
})))

const sliceElements = curry(sliceArray)

const getELementsPosition = curry(
  (
    lineNumber: number,
    sortDirection: 'right' | 'left',
    marginTop: number,
    lists: IElementProps[][],
  ): IFormatedELementProps[] => {
    const formatedList: IFormatedELementProps[] = []
    const beforeHeights: number[] = []
    let sortShort = sortDirection === 'right' ? false : true
    lists.forEach((v, i) => {
      if (!i) {
        v.forEach((val, index) => {
          formatedList.push({
            ...val,
            left: 100 / lineNumber * index,
            top: 0,
          })
          beforeHeights.push(val.height + marginTop)
        })
      } else {
        v.sort((a: IFormatedELementProps, b: IFormatedELementProps) => sortShort
          ? a.height - b.height : b.height - a.height)
          .forEach((val: IFormatedELementProps, index: number) => {
            formatedList.push({
              ...val,
              left: 100 / lineNumber * index,
              top: beforeHeights[index]
            })
            beforeHeights[index] = val.height + marginTop + beforeHeights[index]
          })
      }
      sortShort = !sortShort
    })
    return formatedList
})

const parserElement = (
  listElements: JSX.Element[],
  lineNumber: number,
  sortDirection: 'left' | 'right',
  marginTop: number
) => {
  return pipe(
    getElementsArray,
    getElementsHeight(listElements),
    sliceElements(lineNumber),
    getELementsPosition(lineNumber, sortDirection, marginTop),
  )('.swiper-item')
}

export default (props: {
  lineNumber: number
  listElements: JSX.Element[]
  marginTop: number
  sortDirection?: 'left' | 'right'
  touchBottomEvent?: (list: JSX.Element[], formatedList: IFormatedELementProps[]) => void
}) => {
  const { lineNumber, listElements, marginTop, sortDirection } = props
  const [elementsMap, setElementsMap] = useState([])
  const [wrapperHeight, setWrapperHeight] = useState(0)

  const createWaterfallComponent = useCallback(() => {
    const formatedList: IFormatedELementProps[] = parserElement(listElements, lineNumber, sortDirection, marginTop)
    const maxBottomElement = formatedList.slice(formatedList.length - 3)
    .sort((a, b) => b.top + b.height - a.height - a.top)[0]
    setWrapperHeight(maxBottomElement.height + maxBottomElement.top)
    setElementsMap(formatedList)
  }, [listElements])

  useEffect(() => {
    createWaterfallComponent()
  }, [listElements])

  return (
    <CardWrapper height={wrapperHeight}>
      {
        !elementsMap.length ? listElements.map(v => (
          <CardContainer key={v.key}  w={100 / lineNumber}>{v}</CardContainer>
        )) : elementsMap.map((v, i) => (
            <CardContainer
              w={100 / lineNumber}
              t={v.top}
              l={v.left}
              h={v.height}
              key={`cart-${i}`}
            >
              {listElements.filter(val => val === v.el)}
            </CardContainer>
          ))
      }
    </CardWrapper>
  )
}