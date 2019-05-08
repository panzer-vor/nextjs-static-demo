import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { Main } from '@components/style'
import { Header, Footer } from '@components/module'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  a {
    text-decoration: none;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  button {
    outline: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

interface ILayout {
  children: JSX.Element
  title: string
  href: string
}

const Layout = (props: ILayout) => (
  <>
    <Head>
      <title>{ props.title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <GlobalStyle />
    <Header href={props.href} />
    { props.children }
  </>
)

const home = (props: ILayout) => {
  const { children, ...newProps } = props
  return (
    <Layout {...newProps}>
      <Main.home>
        {props.children}
      </Main.home>
    </Layout>
  )
}

const another = (props: ILayout) => {
  const { children, ...newProps } = props
  return (
    <Layout {...newProps}>
      <>
        <Main.another>
          {props.children}
        </Main.another>
        <Footer />
      </>
    </Layout>
  )
}

export default {
  home,
  another,
}