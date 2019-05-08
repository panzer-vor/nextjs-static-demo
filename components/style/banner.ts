import styled from "styled-components"
import { global } from '@components/style'

const background = styled.section`
  width: 100%;
  height: 326px;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    height: auto;
    min-height: 150px;
    padding-bottom: 20px;
  }
  background-color: red;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding-bottom: 91px;
`

const h1WithNav = styled.h1`
  font-size:36px;
  color: ${global.activeColor};
  position: absolute;
  font-weight:400;
  text-align: center;
  top: 164px;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    position: static;
    margin-top: ${global.headerHeightMobile};
  }
`

const h1 = styled.h1`
  font-size: 48px;
  color: ${global.activeColor};
  @media screen and (max-width: ${global.mediaMobileSize}) {
    font-size: 30px;
    text-align: center;
  }
`

const nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 266px;
  margin: auto;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    position: static;
    margin-top: 20px;
    flex-direction: column;
    height: auto;
  }
`

const itemActiveStyle = `
  background:linear-gradient(225deg,rgba(250,43,86,1) 0%,rgba(249,28,61,1) 100%);
  border: 1px solid rgba(249,28,61,1);
`

const itemDefaultStyle = `
  border: 1px solid ${global.activeColor};
`

const item = styled.div`
  padding: 11px 35px;
  text-align: center;
  font-size: 20px;
  color: ${global.activeColor};
  border-radius:5px;
  ${(props: {isActive?: boolean}) => props.isActive ? itemActiveStyle : itemDefaultStyle}
  margin-right: 40px;
  ${global.lastChildNoMargin('right')}
  transition: all .3s;
  cursor: pointer;
  &:hover {
    ${itemActiveStyle}
  }
  @media screen and (max-width: ${global.mediaMobileSize}) {
    position: static;
    margin-top: 20px;
    margin-right: 0;
  }
`

export default {
  background,
  h1,
  nav,
  item,
  h1WithNav,
}