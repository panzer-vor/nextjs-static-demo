import { Banner } from '@components/style'
import { IBanner, IList } from '@interface/components'
import { RouterProps } from 'next/router'

const nav = ({
  list,
  router,
  defaultQuery = ''
}: {
  list: IList[]
  router: RouterProps
  defaultQuery?: string
}) => {
  const { query } = router
  const routerReplace = (key: string) => () => router.push({
    pathname: router.pathname,
    query: {
      subpath: key
    }
  })
  const subpath = query.subpath || defaultQuery
  return (
    <Banner.nav>
      {
        list.map(v => (
          <Banner.item
            key={v.key}
            isActive={subpath.indexOf(v.key) > -1}
            onClick={routerReplace(v.key)}
          >{v.name}</Banner.item>
        ))
      }
    </Banner.nav>
  )
}

const wrapper = ({
  children,
}: IBanner) => {
  return (
    <Banner.background>
      {children}
    </Banner.background>
  )
}

export default {
  wrapper,
  nav
}
