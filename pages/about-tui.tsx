import React from 'react';
import {
  Layout,
  Banner,
  Swiper,
} from '@components/module'
import { withRouter } from 'next/router'
import { IPageProps } from '@interface/page'
import styled from 'styled-components';
import {
  global,
  Main, Banner as BannerStyle } from '@components/style'
import { Part, Part2 } from '@components/aboutTUI'
const arrowCommon = `
  width: 44px;
  height: 44px;
  position: absolute;
  box-shadow:20px 20px 60px 0px rgba(0,0,0,0.4);
  border-radius:50%;
  top: calc(50% - 22px);
  cursor: pointer;
  @media screen and (max-width: ${global.mediaMobileSize}) {
    opacity: .5;
  }
`

const leftArrow = styled.div`
  ${arrowCommon}
  background: url(/static/leftArrow.png);
  left: 20px;
`

const rightArrow = styled.div`
  ${arrowCommon}
  background: url(/static/rightArrow.png);
  right: 20px;
`

const Page = (props: IPageProps) => {
  return (
    <Layout.another title={__('aboutTUI')} href={props.router.pathname}>
      <>
        <Banner.wrapper bannerbackground='aboutusbanner.jpg'>
          <BannerStyle.h1>{__('aboutTUI')}</BannerStyle.h1>
        </Banner.wrapper>
        <Main.typeOneSide>
          <Main.block mb={30}>
            <Main.articleBlock>{__('tuiPart1')}</Main.articleBlock>
            <Main.articleBlock>{__('tuiPart2')}</Main.articleBlock>
          </Main.block>
          <Main.block>
            <Swiper
              childList={
                [<Part key='part1' />, <Part2 key='part2' />]
              }
              time={5000}
              Controllor={{
                Pagination: {
                  leftItem: leftArrow,
                  rightItem: rightArrow,
                },
              }}
              hoverStop={true}
            />
          </Main.block>
          <Main.block mb={30}>
            <Main.articleBlock mb={10}>
              <Main.tagInfo>{__('tuiPart3_2_1')}</Main.tagInfo>
            </Main.articleBlock>
            <Main.articleBlock lh={26}>{__('tuiPart3_2_2')}</Main.articleBlock>
            <Main.articleBlock mb={10}>
              <Main.tagInfo>{__('tuiPart3_3_1')}</Main.tagInfo>
            </Main.articleBlock>
            <Main.articleBlock lh={26}>{__('tuiPart3_3_2')}</Main.articleBlock>
            <Main.articleBlock lh={26}>{__('tuiPart3_3_3')}</Main.articleBlock>
          </Main.block>
        </Main.typeOneSide>
      </>
    </Layout.another>
  )
}

export default withRouter(Page)