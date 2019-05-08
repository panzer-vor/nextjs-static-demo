import React from 'react';
import { Layout, Banner } from '@components/module'
import { withRouter } from 'next/router'
import { IPageProps } from '@interface/page'
import { Main, Banner as BannerStyle } from '@components/style'

const Page = (props: IPageProps) => {
  return (
    <Layout.another title={__('aboutTUI')} href={props.router.pathname}>
      <>
        <Banner.wrapper bannerbackground='aboutusbanner.jpg'>
          <BannerStyle.h1>{__('aboutTUI')}</BannerStyle.h1>
        </Banner.wrapper>
        <Main.typeOneSide>
          <Main.block mb={35}>
            <Main.jobTitle>{__('jobPosition')}</Main.jobTitle>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_1')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_2')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_3')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_4')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_5')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_6')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_7')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_8')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_9')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={35}>
            <a target="_blank">
              <Main.jobItem>{__('jobPosition_10')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={80}>
            <a>
              <Main.jobItem>{__('jobPosition_11')}</Main.jobItem>
            </a>
          </Main.block>
          <Main.block mb={30}>
            <Main.jobTitle>{__('weSupport')}</Main.jobTitle>
          </Main.block>
          <Main.block mb={60}>
            <Main.jobInfo>{__('weSupportInfo')}</Main.jobInfo>
          </Main.block>
          <Main.block mb={30}>
            <Main.jobTitle>{__('CVPost')}</Main.jobTitle>
          </Main.block>
          <Main.block>
            <Main.jobInfo>{__('CVPost_1')}<Main.jobItem>aaaaaaaaaa</Main.jobItem>{__('CVPost_2')}</Main.jobInfo>
          </Main.block>
        </Main.typeOneSide>
      </>
    </Layout.another>
  )
}

export default withRouter(Page)