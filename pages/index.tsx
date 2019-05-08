import React from 'react'
import { Layout, Swiper } from '@components/module'
import { Swiper as SwiperStyle } from '@components/style'
import { Part1, Part2 } from '@components/home'
import { withRouter } from 'next/router'
import { IPageProps } from '@interface/page'

const Page = (props: IPageProps) => {
  return (
    <Layout.home title={__('homePage')} href={props.router.pathname}>
      <Swiper
        childList={[Part1(), Part2()]}
        Controllor={{
          Navigation: {
            activePoint: SwiperStyle.pointActive,
            wrapper: SwiperStyle.controllor,
            defalutPoint: SwiperStyle.pointDefault,
            icon: SwiperStyle.point,
          }
        }}
        time={5000}
      />
    </Layout.home>
  )
}
export default withRouter(Page)