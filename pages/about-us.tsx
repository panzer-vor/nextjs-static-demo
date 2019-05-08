import React from 'react';
import { Layout, Banner, List } from '@components/module'
import { withRouter } from 'next/router'
import { IPageProps } from '@interface/page'
import { Main, Banner as BannerStyle } from '@components/style'

const list = [
  {
    key: 'mission',
    name: __('mission')
  },
  {
    key: 'vision',
    name: __('vision')
  },
  {
    key: 'companyProfile',
    name: __('companyProfile')
  },
  {
    key: 'weServicedWho',
    name: __('weServicedWho')
  },
  {
    key: 'ourTarget',
    name: __('ourTarget')
  },
  {
    key: 'supportSystem',
    name: __('supportSystem')
  },
]

const Page = (props: IPageProps) => {
  return (
    <Layout.another title={__('aboutUs')} href={props.router.pathname}>
      <>
        <Banner.wrapper bannerbackground='aboutusbanner.jpg'>
          <BannerStyle.h1>{__('aboutUsBannerText')}</BannerStyle.h1>
        </Banner.wrapper>
        <Main.typeTwoSide>
          <List
            list={list}
            navElements={{
              title: <Main.navTitle>{__('aboutUs')}</Main.navTitle>,
              item: Main.navItem,
              wrapper: Main.nav
            }}
          >
            <Main.content>
              <Main.block>
                <Main.tag title="tag-mission">{__('mission')}</Main.tag><span>{__('missionContent')}</span>
              </Main.block>
              <Main.block>
                <Main.tag title="tag-vision">{__('vision')}</Main.tag><span>{__('visionContent')}</span>
              </Main.block>
              <Main.block>
                <Main.tag title="tag-companyProfile">{__('companyProfile')}</Main.tag>
                <Main.articleBlock>
                  <Main.tagInfo>{__('companyProfileTagInfo')}</Main.tagInfo>
                </Main.articleBlock>
                <Main.articleBlock>{__('companyProfileText1')}</Main.articleBlock>
                <Main.articleBlock>{__('companyProfileText2')}</Main.articleBlock>
              </Main.block>
              <Main.block>
                <Main.tag title="tag-weServicedWho">{__('weServicedWho')}</Main.tag>
                <Main.articleBlock>
                  <Main.tagInfo>{__('weServicedWhoTagInfo')}</Main.tagInfo>
                </Main.articleBlock>
                <Main.articleBlock>{__('weServicedWhoText1')}</Main.articleBlock>
                <Main.articleBlock>{__('weServicedWhoText2')}</Main.articleBlock>
                <Main.articleBlock>{__('weServicedWhoText3')}</Main.articleBlock>
              </Main.block>
              <Main.block>
                <Main.tag title="tag-ourTarget">{__('ourTarget')}</Main.tag>
                <Main.articleBlock>
                  <Main.tagInfo>{__('ourTargetTagInfo')}</Main.tagInfo>
                </Main.articleBlock>
                <Main.articleBlock>{__('ourTargetText1')}</Main.articleBlock>
                <Main.articleBlock>{__('ourTargetText1')}</Main.articleBlock>
              </Main.block>
              <Main.block>
                <Main.tag title="tag-supportSystem">{__('supportSystem')}</Main.tag>
                <Main.articleBlock>
                  <Main.tagInfo>{__('supportSystemTagInfo1')}</Main.tagInfo>
                </Main.articleBlock>
                <Main.articleBlock>{__('supportSystemText1')}</Main.articleBlock>
                <Main.articleBlock>
                  <Main.tagInfo>{__('supportSystemTagInfo2')}</Main.tagInfo>
                </Main.articleBlock>
                <Main.articleBlock>{__('supportSystemText2')}</Main.articleBlock>
                <Main.articleBlock>
                  <Main.tagInfo>{__('supportSystemTagInfo3')}</Main.tagInfo>
                </Main.articleBlock>
                <Main.articleBlock>{__('supportSystemText3')}</Main.articleBlock>
              </Main.block>
            </Main.content>
          </List>
        </Main.typeTwoSide>
      </>
    </Layout.another>
  )
}

export default withRouter(Page)