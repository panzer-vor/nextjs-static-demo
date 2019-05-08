import styled from 'styled-components'
import { global } from '@components/style'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Content = styled.section`
  ${global.absCenterPos}
  top: 35%;
  text-align: center;
  color: ${global.activeColor};
  @media screen and (max-width: ${global.mediaMobileSize}) {
    top: 20%;
    bottom: auto;
  }
`
const Logo = styled.img`
  width: 196px;
  height: 66px;
  margin-bottom: 55px;
`
const H1 = styled.h1`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    font-size: 30px;
  }
  font-size: 48px;
  margin-bottom: 30px;
`
const H2 = styled.h2`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    font-size: 20px;
  }
  font-size: 28px;
`
export default () => {
  return (
    <Container key="part2">
      <Content>
        <Logo src="/static/logo.png" />
        <H1>{__('homePart2H1')}</H1>
        <H2>{__('homePart2H2')}</H2>
      </Content>
    </Container>
  )
}