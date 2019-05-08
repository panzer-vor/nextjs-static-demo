import styled from 'styled-components'
import { global } from '@components/style'

const item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  img {
    width: 16px;
    height: 18px;
  }
  h1 {
    font-size: 18px;
    color: ${global.defaultSubColor};
    margin: 30px auto 8px;
  }
  p {
    font-size: 14px;
    color: ${global.inactiveColor};
  }
`

const wrapper = styled.footer`
  width: 100%;
  height: ${global.footerHeight};
  @media screen and (max-width: ${global.mediaMobileSize}) {
    height: 200px;
  }
  background: yellow;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export default {
  wrapper,
  item,
}