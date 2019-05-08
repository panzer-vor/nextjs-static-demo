import styled from 'styled-components'
import { global } from '@components/style'

const Container = styled.div`
  @media screen and (max-width: ${global.mediaMobileSize}) {
    height: 200px;
    width: 50%;
  }
  width: 571px;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`

const Content = styled.section`
  flex: 1;
`

const Info = styled.p`
  white-space: pre-wrap;
  color: ${global.infoColor};
  font-size: 16px;
  line-height: 26px;
`

const H1 = styled.h1`
  font-size: 28px;
  color: ${global.infoColor};
  margin-bottom: 10px;
  span {
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
  }
`

export default () => {
  return (
    <Container key="part">
      <Content>
        <H1>{__('tuiPart3_1_1')}<span>{__('tuiPart3_1_2')}</span></H1>
        <Info>{__('tuiPart3_1_3')}</Info>
      </Content>
    </Container>
  )
}