import { Header } from '@components/style'
import Link from 'next/link'
import { DrowDown } from '@components/module'

export const list = [
  {
    uri: `/index`,
    link: '/index',
    title: __('homePage'),
  },
  {
    uri: '/about-us',
    link: '/about-us',
    title: __('aboutUs'),
  },
  {
    uri: '/about-tui',
    link: '/about-tui',
    title: __('aboutTUI'),
  },
  {
    uri: '/institutions',
    title: __('institutions'),
    children: [
      {
        href: '/institutions?subpath=once-book-store',
        title: __('onceBookStore')
      },
      {
        href: '/institutions?subpath=read-english',
        title: __('readEnglish')
      },
      {
        href: '/institutions?subpath=wubi-school',
        title: __('wubiSchool')
      },
      {
        href: '/institutions?subpath=fly-university',
        title: __('flyUniversity')
      },
    ]
  },
  {
    uri: '/new-message',
    link: '/new-message',
    title: __('newMessage'),
  },
]


export default ({ href }: { href: string }) => {
  const hrefHandled = href === '/' ? '/index' : href
  return (
    <Header.header>
      {/* pc端头部布局 */}
      <Header.background />
      <Header.nav>
        {
          list.map(v => (
            <Header.item href={hrefHandled} uri={v.uri} key={v.uri}>
              {
                v.children ? (
                  <>
                    <span>{v.title}</span>
                    <Header.subNav>
                      {
                        v.children.map(val => (
                          <Header.subItem key={val.title}>
                            <Link href={val.href}>
                              <a>{val.title}</a>
                            </Link>
                          </Header.subItem>
                        ))
                      }
                    </Header.subNav>
                  </>
                ) : (
                  <Link href={v.link}>
                    <a>{v.title}</a>
                  </Link>
                )
              }
            </Header.item>
          ))
        }
      </Header.nav>
      {/* <Header.i18n>
        <span>中文</span> | <span>English</span>
      </Header.i18n> */}
      {/* 移动的头部布局 */}
      <DrowDown list={list} hrefHandled={hrefHandled} maxHeight={500} />
    </Header.header>
  )
}