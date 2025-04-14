import Showcase from 'components/showcase'

import { useWindow } from 'lib/hooks'

import stl from './Feature.module.scss'

const mainShowcases = [
  {
    title: 'Work that matters',
    subTitle: 'Everything else is just busy work.',
    imgSrc: '/assets/png/man-ai-map.jpeg',
    smallDesImgSrc: '/assets/png/man-ai-map.jpeg',
    mobileImgSrc: '/assets/png/man-ai-map.jpeg',
    isDark: true,
  },
  {
    title: 'Alma',
    subTitle: 'Teaching made wonderfully simple.',
    imgSrc: '/assets/png/iphone-14.png',
    smallDesImgSrc: '/assets/png/iphone-14-tablet.png',
    mobileImgSrc: '/assets/png/iphone-14-mobile.png',
  },
  {
    title: 'AI native business',
    subTitle: 'At the intersection of technology, business, and humanity, something magical happens.',
    imgSrc: '/assets/png/ipad-pro.png',
    smallDesImgSrc: '/assets/png/ipad-pro-tablet.png',
    mobileImgSrc: '/assets/png/ipad-pro-mobile.png',
    isDark: true,
    textBoxClass: stl.ipadPro,
  },
]

const Feature = () => {
  const { isSmallDes, isTablet, isMobile } = useWindow()

  return (
    <section className={stl.container}>
      {mainShowcases.map(showcase => (
        <Showcase
          key={showcase.title}
          {...showcase}
          isSmallDes={isSmallDes || isTablet}
          isMobile={isMobile}
        />
      ))}
    </section>
  )
}

export default Feature
