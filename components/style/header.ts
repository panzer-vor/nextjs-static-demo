import styled from 'styled-components'
import { global } from '@components/style'

interface ILinkProps {
  href: string
  uri: string
}

const background = styled.div`
  ${global.fullCover}
  position: absolute;
  background: ${global.headerBackgroundColor};
  opacity:0.05;
  top: 0;
`

const header = styled.header`
  width: 100%;
  height: ${global.headerHeight};
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    height: ${global.headerHeightMobile};
  }
`
const i18n = styled.div`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: none;
  }
  font-size: 14px;
  color: ${global.inactiveColor};
  margin-right: 37px;
  z-index: 1;
  cursor: pointer;
`
const nav = styled.nav`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: none;
  }
  font-size: 16px;
  margin-right: 115px;
  z-index: 1;
  height: 100%;
  display: flex;
`
const item = styled.span`
  margin-right: 46px;
  color: ${global.inactiveColor};
  height: 100%;
  ${global.absCenterFlex}
  ${global.lastChildNoMargin('right')}
  &:hover>ul {
    max-height: 300px;
    padding: 22px;
  }
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
const logo = styled.img`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: none;
  }
  position: absolute;
  left: 112px;
  top: 33px;
  width: 121px;
  z-index: 1;
  cursor: pointer;
`
const subNav = styled.ul`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  background: ${global.activeColor};
  color: ${global.defaultSubColor};
  transition: all .3s;
  font-size: 14px;
  overflow: hidden;
  max-height: 0;
`
const subItem = styled.li`
  margin-bottom: 14px;
  ${global.lastChildNoMargin('bottom')}
  a {
    ${global.aInitial(global.defaultSubColor, global.defaultSubColor)}
  }
`

export default {
  header,
  i18n,
  nav,
  item,
  background,
  logo,
  subNav,
  subItem,
}