/**
 * 移动端手滑下拉头部导航
 * 因chrome移动端的下滑为刷新事件，会造成冲突
 * 故废弃
 */


import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import { IHeaderLIst } from '@interface/header'
import { animaitonStep } from '@lib/util'
import { global } from '@components/style'
import Link from 'next/link'

interface ILinkProps {
  href: string
  uri: string
}

const DrowDownWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props: {height: number}) => props.height || 0}px;
  background: linear-gradient(180deg,rgba(18,48,117,1) 0%,rgba(9,32,86,1) 100%);
  overflow: hidden;
  color: ${global.inactiveColor};
`
const DrowDownItem = styled.div`
  margin: 20px 0 0 20px;
  font-size: 16px;
  &>span {
    color: ${(props: ILinkProps): string => props.href.indexOf(props.uri) > -1
      ? global.activeColor : global.inactiveColor};
  }
  &>a {
    color: ${(props: ILinkProps): string => props.uri.indexOf(props.href) > -1
      ? global.activeColor : global.inactiveColor};
    &:visited {
      color: ${(props: ILinkProps): string => props.uri.indexOf(props.href) > -1
        ? global.activeColor : global.inactiveColor};
    }
    &:hover {
      color: ${global.activeColor};
    }
    &:active {
      color: ${global.activeColor};
    }
  }
`
const DrowDownSubItem = styled.div`
  margin: 20px 0 0 20px;
  font-size: 14px;
  &>a {
    ${global.aInitial('#709BE7', '#709BE7')}
  }
`

export default ({
  list,
  hrefHandled,
  drowHeight = 100,
  drowMaxHeight,
}: {
  list: IHeaderLIst[]
  hrefHandled: string
  drowHeight?: number
  drowMaxHeight: number
}) => {
  const FULL_COVER = 1
  const COVERING = 2
  const NO_COVER = 3
  let touchStartY = 0
  let touchMoveY = 0
  let touchDistance = 0
  const variableCritical = drowMaxHeight  // 拖动最大高度
  const variableResponseCritical = drowHeight  // 拖动响应高度
  let coverStep = NO_COVER // 展开状态
  const [height, setHeight] = useState(0)
  const timer = useRef(0)

  const animation = (end: number, transientEnd?: boolean) => {
    coverStep = COVERING
    timer.current = requestAnimationFrame(() => {
      touchDistance = animaitonStep(2, touchDistance, end)
      if (Math.abs(touchDistance - end) > 0) {
        setHeight(touchDistance)
        animation(end, transientEnd)
      } else {
        cancelAnimationFrame(timer.current)
        if (!transientEnd) {  // 不是暂时最大时才能定coverStep状态
          end === 0 ? coverStep = NO_COVER : coverStep = FULL_COVER
        }
      }
    })
  }

  const canIStartTouch = (callback?: Function) => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 0) {
      if (callback) {
        callback()
      }
      return false
    }
    return true
  }

  const canITouchEvent = (e: TouchEvent, step: string) => {
    const touchTarget: any = e.target
    const touchInside = touchTarget.contains(document.querySelector('#drow-down-wrapper'))
    switch (step) {
      case 'start':
        if (
          !touchInside
          && coverStep === FULL_COVER
        ) {
          return false
        }
        break
      case 'move':
        if (
          !touchInside
          && (coverStep === FULL_COVER || coverStep === COVERING)
        ) {
          return false
        }
        break
      case 'end':
        if (
          !touchInside
          && coverStep === FULL_COVER
        ) {
          return false
        }
        break
      default:
        if (!touchInside) {
          return false // 当手指点在了header内，返回 false
        }
    }
    return true
  }

  const headTouchStartEvent = (e?: TouchEvent) => {
    if (!canIStartTouch()) {
      return
    }
    if (!canITouchEvent(e, 'start')) {
      return
    } else {
      touchStartY = e.changedTouches[0].clientY
    }
  }
  const headTouchMoveEvent = (e?: TouchEvent) => {
    if (!canIStartTouch()) {
      return
    }
    if (!canITouchEvent(e, 'move')) {
      return
    }
    touchMoveY = e.changedTouches[0].clientY
    touchDistance = touchMoveY - touchStartY
    if (touchDistance < 0) {
      return
    }
    if (touchDistance > variableResponseCritical) {
      animation(variableCritical, true)
    } else {
      setHeight(touchDistance)
    }
  }
  const headTouchEndEvent = (e?: TouchEvent) => {
    if (touchDistance < 0) {
      return
    }
    if (!canIStartTouch(() => animation(0))) {
      return
    }
    if (coverStep !== COVERING) {
      if (!canITouchEvent(e, 'end')) {
        if (!canITouchEvent(e, '')) {
          animation(0)
        }
        return
      }
    }
    if (touchDistance >= variableResponseCritical && touchDistance <= variableCritical) {
      animation(variableCritical)
    }
    if (touchDistance < variableResponseCritical) {
      animation(0)
    }
  }

  useEffect(() => {
    document.body.addEventListener('touchstart', headTouchStartEvent)
    document.body.addEventListener('touchmove', headTouchMoveEvent)
    document.body.addEventListener('touchend', headTouchEndEvent)
    return () => {
      document.body.removeEventListener('touchstart', headTouchStartEvent)
      document.body.removeEventListener('touchmove', headTouchMoveEvent)
      document.body.removeEventListener('touchend', headTouchEndEvent)
    }
  }, [])
  return (
    <DrowDownWrapper height={height} id="drow-down-wrapper">
      {
        list.map(v => (
          <DrowDownItem href={hrefHandled} uri={v.uri} key={v.uri}>
            {
              v.children ? (
                <>
                  <span>{v.title}</span>
                  <div>
                    {
                      v.children.map(val => (
                        <DrowDownSubItem key={val.href}>
                          <Link href={val.href}>
                            <a>{val.title}</a>
                          </Link>
                        </DrowDownSubItem>
                      ))
                    }
                  </div>
                </>
              ) : (
                <Link href={v.link}>
                  <a>{v.title}</a>
                </Link>
              )
            }
          </DrowDownItem>
        ))
      }
    </DrowDownWrapper>
  )
}