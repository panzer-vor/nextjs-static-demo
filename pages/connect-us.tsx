import React from 'react';
import { Layout, Banner } from '@components/module'
import { withRouter } from 'next/router'
import { IPageProps } from '@interface/page'
import { Main, Banner as BannerStyle } from '@components/style'
import { Headquarters, Ouat, WubiIS } from '@components/connectUs'

const navList = [
  {
    key: 'headquarters',
    name: __('headquarters'),
  },
  {
    key: 'ouat',
    name: __('ouat'),
  },
  // {
  //   key: 'wubiIS',
  //   name: __('wubiIS'),
  // },
]

const Page = (props: IPageProps) => {
  const { query, pathname } = props.router
  return (
    <Layout.another title={__('connectUs')} href={pathname}>
      <>
        <Banner.wrapper bannerbackground='aboutusbanner.jpg'>
          <>
            <BannerStyle.h1WithNav>{__('connectUs')}</BannerStyle.h1WithNav>
            <Banner.nav list={navList} router={props.router} defaultQuery='headquarters' />
          </>
        </Banner.wrapper>
        <Main.typeTwoSide>
          <Main.mapWrapper>
            {
              (() => {
                switch (query.subpath) {
                  case 'headquarters':
                    return <Headquarters />
                  case 'ouat':
                    return <Ouat />
                  case 'wubiIS':
                    return <WubiIS />
                  default:
                    return <Headquarters />
                }
              })()
            }
          </Main.mapWrapper>
        </Main.typeTwoSide>
      </>
    </Layout.another>
  )
}

export default withRouter(Page)