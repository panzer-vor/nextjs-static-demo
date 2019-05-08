import React from 'react';
import { Layout, Banner } from '@components/module'
import { withRouter } from 'next/router'
import { IPageProps } from '@interface/page'
import { Main, Banner as BannerStyle } from '@components/style'
import { ManageTeam, TeachingTeam, TUIInsitutions } from '@components/ourTeam'

const navList = [
  {
    key: 'manage-team',
    name: __('manageTeam'),
  },
  {
    key: 'tui-institutions',
    name: __('tuiInstitutions'),
  },
  {
    key: 'teaching-team',
    name: __('teachingTeam'),
  },
]

const Page = (props: IPageProps) => {
  const { query, pathname } = props.router
  return (
    <Layout.another title={__('ourTeam')} href={pathname}>
      <>
        <Banner.wrapper bannerbackground='aboutusbanner.jpg'>
          <>
            <BannerStyle.h1WithNav>{__('ourTeam')}</BannerStyle.h1WithNav>
            <Banner.nav list={navList} router={props.router} defaultQuery='manage-team' />
          </>
        </Banner.wrapper>
        <Main.typeOneSide>
          {
            (() => {
              switch (query.subpath) {
                case 'manage-team':
                  return <ManageTeam />
                case 'tui-institutions':
                  return <TeachingTeam />
                case 'teaching-team':
                  return <TUIInsitutions />
                default:
                  return <ManageTeam />
              }
            })()
          }
        </Main.typeOneSide>
      </>
    </Layout.another>
  )
}

export default withRouter(Page)