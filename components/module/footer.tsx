import { Footer } from '@components/style'
import Link from 'next/link'

export default () => (
  <Footer.wrapper>
    <Footer.item>
      <Link href="/our-team">
        <a>
          <h1>{__('ourTeam')}</h1>
        </a>
      </Link>
    </Footer.item>
    <Footer.item>
      <Link href="/connect-us">
        <a>
          <h1>{__('connectUs')}</h1>
        </a>
      </Link>
    </Footer.item>
    <Footer.item>
      <Link href="/join-us">
        <a>
          <h1>{__('joinUs')}</h1>
        </a>
      </Link>
    </Footer.item>
  </Footer.wrapper>
)