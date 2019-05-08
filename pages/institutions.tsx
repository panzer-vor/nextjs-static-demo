import React from 'react'
import { Layout, Banner } from '@components/module'
import { withRouter } from 'next/router'
import { IPageProps } from '@interface/page'
import { Main, Banner as BannerStyle } from '@components/style'
import { OnceBookStore, ReadEnglist, WubiSchool, FlyUniversity } from '@components/institutions'


const navList = [
  {
    key: 'once-book-store',
    name: __('onceBookStore'),
  },
  {
    key: 'read-english',
    name: __('readEnglish'),
  },
  {
    key: 'wubi-school',
    name: __('wubiSchool'),
  },
  {
    key: 'fly-university',
    name: __('flyUniversity'),
  },
]
const Page = (props: IPageProps) => {
  const { query, pathname } = props.router
  return (
    <Layout.another title={__('institutions')} href={pathname}>
      <>
        <Banner.wrapper bannerbackground='aboutusbanner.jpg'>
          <>
            <BannerStyle.h1WithNav>{__('institutions')}</BannerStyle.h1WithNav>
            <Banner.nav list={navList} router={props.router} defaultQuery={navList[0].key} />
          </>
        </Banner.wrapper>
        <Main.typeTwoSide>
          {
            (() => {
              switch (query.subpath) {
                case 'once-book-store':
                  return <OnceBookStore />
                case 'read-english':
                  return <ReadEnglist />
                case 'wubi-school':
                  return <WubiSchool />
                case 'fly-university':
                  return <FlyUniversity />
                default:
                  return <OnceBookStore />
              }
            })()
          }
        </Main.typeTwoSide>
      </>
    </Layout.another>
  )
}

export default withRouter(Page)