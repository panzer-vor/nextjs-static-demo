import styled from 'styled-components'
import { global } from '@components/style'

interface ISwiperContainer {
  itemLength: number
  currentIndex: number
  transitionTime?: number
}

const item = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background:rgba(112,155,231,1);
  opacity:0.05;
  top: 0;
`
const wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const view = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`
const container = styled.section`
  width: ${(props: ISwiperContainer): string => `${props.itemLength * 100}%`};
  height: 100%;
  display: flex;
  transition: ${(props: ISwiperContainer): string => `all ${props.transitionTime || 0}s`};
  transform: translateX(${(props) => `-${props.currentIndex * 100 / props.itemLength}%`})
`
const controllor = styled.div`
  position: absolute;
  bottom: 80px;
  margin: auto;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
`
const basePointStyle = `
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  position: relative;
  margin-right: 10px;
  align-items: center;
`
const pointActive = styled.span`
  border-radius:20px;
  border:1px solid rgba(255,255,255,1);
  ${basePointStyle}
`
const pointDefault = styled.span`
  ${basePointStyle}
`
const point = styled.span`
  width: 6px;
  height: 6px;
  background: ${global.activeColor};
  border-radius: 50%;
`
export default {
  item,
  container,
  view,
  controllor,
  pointActive,
  pointDefault,
  point,
  wrapper,
}