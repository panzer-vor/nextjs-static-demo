import { Layout, Banner } from '@components/module';
import { withRouter } from 'next/router';
import { Main, Banner as BannerStyle } from '@components/style';
import { NewMessage, BigNews } from '@components/newMessage'

const navList = [
  {
    key: 'new-message',
    name: __('newMessage'),
  },
  {
    key: 'big-news',
    name: __('bigNews'),
  },
]

const Page = (props) => {
  const { query, pathname } = props.router

  return (
    <Layout.another title={__('newMessage')} href={pathname}>
      <>
        <Banner.wrapper bannerbackground=''>
          <>
            <BannerStyle.h1WithNav>{__('newMessage')}</BannerStyle.h1WithNav>
            <Banner.nav list={navList} router={props.router} defaultQuery={navList[0].key} />
          </>
        </Banner.wrapper>
        <Main.typeOneSide>
          {
            (() => {
              switch (query.subpath) {
                case 'new-message':
                  return <NewMessage />
                case 'big-news':
                  return <BigNews />
                default:
                  return <NewMessage />
              }
            })()
          }
        </Main.typeOneSide>
      </>
    </Layout.another>
  )
}

export default withRouter(Page);