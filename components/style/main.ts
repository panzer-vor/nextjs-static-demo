import styled from 'styled-components'
import { global } from '@components/style'

interface IArticleBlock {
  mb?: number
  lh?: number
}

const home = styled.main`
  flex: 1;
  background: linear-gradient(180deg,rgba(18,48,117,1) 0%,rgba(9,32,86,1) 100%);
  height: 100vh;
  overflow-x: hidden;
`

const another = styled.main`
  flex: 1;
  min-height: calc(100vh - 290px);
  background: ${global.lowerBackgroundColor};
  color: ${global.mainDefaultColor};
`

const typeTwoSide = styled.div`
  padding: 78px 202px;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    padding: 30px 10px;
  }
`

const typeOneSide = styled.div`
  padding: 78px 342px;
  @media screen and (max-width: 1500px) {
    padding: 78px 200px;
  }
  @media screen and (max-width: ${global.mediaMobileSize}) {
    padding: 30px 10px;
  }
`

const nav = styled.nav`
  background: #fff;
  box-shadow:40px 40px 80px 0px rgba(0,0,0,0.1);
  border-radius:5px;
  width: 171px;
  padding: 20px 30px;
  margin-right: 69px;
  cursor: default;
  height: 100%;
  position: sticky;
  top: 0;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: none;
  }
`

const navTitle = styled.h1`
  margin-bottom: 40px;
  color: ${global.mainHighLightColor};
  font-size: 18px;
  font-weight: 600;
`

const navItem = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  ${global.lastChildNoMargin('bottom')}
  color: ${(props: {isActive: boolean}) => props.isActive ? global.mainHighLightColor : global.defaultSubColor};
  font-weight: 600;
  cursor: pointer;
`

const content = styled.section`
  flex: 1;
`

const tag = styled.span`
  display: inline-block;
  background: ${global.mainHighLightColor};
  border-radius: 5px;
  padding: 3px 7px;
  color: ${global.activeColor};
  font-size: 12px;
  margin-right: 10px;
`

const block = styled.div`
  margin-bottom: ${(props: {mb?: number}) => props.mb || 40}px;
`
const image = styled.img`
  width: 100%;
`

const tagInfo = styled.p`
  margin-top: 12px;
  color: ${global.mainHighLightColor};
  font-weight: bold;
`

const articleBlock = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  color: ${global.mainDefaultColor};
  margin-bottom: ${(props: IArticleBlock) => props.mb || 30}px;
  line-height: ${(props: IArticleBlock) => props.lh || 20}px;
`
const messageTable = styled.div`
  width: 757px;
  margin: 0 auto 10px auto;
  white-space: pre-wrap;
  font-size: 14px;
  border: 1px solid #DDDFE7;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    width: calc(100% - 40px);
  }
`

const messageImg = styled.div`
  width: 228px;
  height: 207px;
  margin-right: 29px;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: none;
  }
`

const img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

const tableContent = styled.div`
  min-height: 207px;
  width: 479px;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    width: 100%;
  }
`

const tableTitle = styled.h1`
  line-height: 33px;
  font-size: 24px;
  font-weight: 400;
  color: #0A225A;
`

const tableDate = styled.div`
  display: flex;
`

const dateIcon = styled.img`
  width: 12px;
  height: 12px;
`

const dateContent = styled.p`
  height: 18px;
  line-height: 18px;
  font-size: 10px;
  color: #595F6F;
  margin-top: 5px;
`

const messageTableContent = styled.div`
  width: 459px;
  height: 72px;
  font-size: 14px;
  color: #595F6F;
  line-height: 24px;
  margin-top: 25px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #DDDFE7;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    width: 100%;
    height: auto;
  }
`

const messageTagIcon = styled.div`
  width: 12px;
  height: 18px;
  margin-right: 4px;
`

const messageDateIcon = styled.div`
  width: 12px;
  height: 18px;
  margin-right: 4px;
  margin-top: 5px;
`

const tableFoot = styled.div`
  width: 459px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    width: 100%;
  }
`

const tableTag = styled.div`
  display: flex;
`

const tagContent = styled.div`
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #A6A6A6;
`

const tagButton = styled.div`
  width: 78px;
  height: 29px;
  text-align: center;
  background: #0F358E;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 400;
  line-height: 29px;
  color: #FFFFFF;
  cursor: pointer
`

const messageMore = styled.div`
  width: 100%;
  margin-top: 20px;
  transition: all .3s;
  overflow: hidden;
  max-height: ${(props:{showMore: boolean}) => props.showMore ? 600 : 0}px;
`

const moreText = styled.p`
  font-size: 14px;
  color: #595F6F;
  line-height: 24px;
`

const moreImage = styled.img`
  width: 100%;
  height: 306px;
  display: block;
  margin-top: 20px;
`

const cardWrapper = styled.section`
  width: 262px;
  padding: 26px 0 18px;
  background: ${global.defaultCardbackgroundColor};
  border:1px solid rgba(221,223,231,1);
  transition: all .3s;
  &:hover {
    background: ${global.activeColor};
    box-shadow:40px 40px 80px 0px rgba(0,0,0,0.1);
    border-radius:5px;
    border:1px solid #fff;
  }
`

const teamCardWrapper = styled.section`
  width: 846px;
  margin: auto;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: none;
  }
`
const teamCardWrapperMobile = styled.section`
  margin: auto;
  width: 80%;
  @media screen and (min-width: ${global.mediaMobileSize}) {
    display: none;
  }
`
const teamCard = styled.div`
  padding: 26px 0 18px;
  background: ${global.defaultCardbackgroundColor};
  border:1px solid rgba(221,223,231,1);
  transition: background .3s, box-shadow .3s, border-radius .3s;
  margin-right: 30px;
  border-radius:5px;
  &:hover {
    background: ${global.activeColor};
    box-shadow:40px 40px 80px 0px rgba(0,0,0,0.1);
    border:1px solid #fff;
  }
  @media screen and (max-width: ${global.mediaMobileSize}) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`
const teamCardHeader = styled.div`
  height: 86px;
  border-bottom: 1px solid rgba(221,223,231,1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  img {
    width: 40px;
    margin-right: 20px;
    box-shadow:0px 10px 40px 0px rgba(0,0,0,0.2);
    border-radius: 50%;
  }
  &>div {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
      color: ${global.mainHighLightColor};
      font-size: 18px;
      margin-bottom: 5px;
    }
    p {
      color: ${global.defaultSubColor};
      font-size: 12px;
      padding-right: 15px;
    }
  }
`
const teamCardContent = styled.div`
  padding: 40px 30px 0;
  color: ${global.defaultSubColor};
  font-size: 14px;
  line-height:24px;
`

const mapInfo = styled.div`
  h1 {
    color: ${global.mainHighLightColor};
    font-size: 16px;
    letter-spacing:1px;
    margin-bottom: 21px;
    font-weight: bold;
  }
  p {
    color: ${global.lowerDefaultColor};
    margin-bottom: 10px;
    font-size: 14px;
  }
`
const mapWrapper = styled.div`
  width: 840px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    display: block;
  }
`
const map = styled.div`
  width: 436px;
  height: 261px;
  background:rgba(216,216,216,1);
  box-shadow:0px 30px 60px 0px rgba(0,0,0,0.3);
  border-radius:5px;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    width: 100%;
  }
`

const jobTitle = styled.h1`
  color: ${global.introColor};
  font-weight: bold;
  font-size: 14px;
`
const jobItem = styled.span`
  color: ${global.mainHighLightColor};
  font-size: 14px;
`
const jobInfo = styled.p`
  color: ${global.introColor};
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 20px;
`

export default {
  home, // 主页布局
  another,  // 其他页面布局
  typeTwoSide,  // 主体内容双边的容器
  typeOneSide,  // 主体内容单边的容器
  nav,  //  悬浮菜单的外层
  navTitle, // 悬浮菜单导航的标题
  navItem,  // 悬浮菜单导航的子项
  content,  // 简单右侧外层 flex: 1
  tag,  // 悬浮菜单导航对应的内容文章里的标签
  block,  // 块组件的外层
  image,  // 最简单图片组件 width: 100%
  tagInfo,  // 标签信息
  articleBlock, // 文本组件的外层
  teamCardWrapper,  //  我们团队外层
  teamCardWrapperMobile,  // 我们团队卡片外层移动版
  teamCard, // 我们团队卡片
  teamCardHeader, // 我们团队卡片头部
  teamCardContent,  // 我们团队卡片内容部分
  mapInfo,  // 地图组件信息
  mapWrapper, // 地图组件外层
  map,  // 地图组件内容
  jobTitle,
  jobItem,
  jobInfo,
  messageTable,
  messageImg,
  messageTagIcon,
  messageDateIcon,
  tableContent,
  tableTitle,
  img,
  tableDate,
  dateIcon,
  dateContent,
  messageTableContent,
  cardWrapper,
  tableFoot,
  tableTag,
  tagContent,
  tagButton,
  messageMore,
  moreText,
  moreImage,
}

