import styled from 'styled-components'
import { global } from '@components/style'
import Link from 'next/link'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Content = styled.section`
  position: absolute;
  bottom: 176px;
  left: 129px;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    left: 10%;
    bottom: 20%;
    padding-right: 20px;
  }
`
const H1 = styled.h1`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    font-size: 30px;
  }
  font-size: 70px;
  color: ${global.activeColor};
  margin-bottom: 23px;
`
const H2 = styled.h2`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    font-size: 20px;
  }
  font-size: 28px;
  color: ${global.activeColor};
  margin-bottom: 65px;
`
const Button = styled.button`
  font-size: 70px;
  width:183px;
  height:50px;
  background: red;
  border-radius:5px;
  font-size:16px;
  color: ${global.activeColor};
  display:flex;
  justify-content: space-between;
  padding-right: 20px;
`
const Text = styled.span`
  display: inline-block;
  margin-left: 20px;
`
const Arrow = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid ${global.activeColor};
  border-right: 1px solid ${global.activeColor};
  transform: rotate(45deg);
  margin-top: 3px;
`
export default () => {
  return (
    <Container key="part1">
      <Content>
        <H1>{__('homePart1H1')}</H1>
        <H2>{__('homePart1H2')}</H2>
        <Link href="/about-us" prefetch>
          <a>
            <Button><Text>{__('knowMore')}</Text><Arrow /></Button>
          </a>
        </Link>
      </Content>
    </Container>
  )
}