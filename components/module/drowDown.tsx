import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import { IHeaderLIst } from '@interface/header'
import { global } from '@components/style'
import Link from 'next/link'

interface ILinkProps {
  href: string
  uri: string
}

const SpreadButton = styled.div`
  display: none;
  position: absolute;
  right: 32px;
  top: 22px;
  width: 22px;
  height: 22px;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: block;
  }
  div {
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 7px;
    }
    &:nth-child(3) {
      top: 14px;
    }
  }
  div {
    position: absolute;
    width: 22px;
    height: 2px;
    background: ${global.activeColor};
    transform-origin: 50% 50%;
    transition: transform .1s 0s ease-in-out,top .1s .1s ease-in-out;
  }
`

const DrowDownWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-height: ${(props: {
    height: number
    showState: 0 | 1
  }) => props.showState ? props.height : 0}px;
  background: linear-gradient(180deg,rgba(18,48,117,1) 0%,rgba(9,32,86,1) 100%);
  overflow: hidden;
  color: ${global.inactiveColor};
  transition: all .3s;
`
const DrowDownItem = styled.div`
  margin: 20px 0 0 20px;
  &:last-child {
    margin-bottom: 20px;
  }
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
  maxHeight,
}: {
  list: IHeaderLIst[]
  hrefHandled: string
  drowHeight?: number
  maxHeight: number
}) => {
  const drowDownEl = useRef(null)

  const [showState, setShowState] = useState<0 | 1>(0)

  const showNav = () => setShowState(1)

  const headClickEvent = () => setShowState(0)

  const headInsiteClickEvent = (e: MouseEvent) => e.stopPropagation()

  useEffect(() => {
    document.body.addEventListener('click', headClickEvent)
    drowDownEl.current.addEventListener('click', headInsiteClickEvent)
    return () => {
      document.body.removeEventListener('click', headClickEvent)
      drowDownEl.current.removeEventListener('click', headInsiteClickEvent)
    }
  }, [])

  return (
    <>
      <SpreadButton onClick={showNav}>
        <div />
        <div />
        <div />
      </SpreadButton>
      <DrowDownWrapper height={maxHeight} showState={showState} ref={ref => drowDownEl.current = ref}>
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
    </>
  )
}
