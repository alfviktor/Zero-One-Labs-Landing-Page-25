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
    textBoxClass: stl.ipadPro,
  },
  {
    title: 'Alma',
    subTitle: 'Teaching made wonderfully simple.',
    imgSrc: '/assets/png/alma_2.jpeg',
    smallDesImgSrc: '/assets/png/alma_2.jpeg',
    mobileImgSrc: '/assets/png/alma_2.jpeg',
    isDark: true,
    textBoxClass: stl.ipadPro,
  },
  {
    title: 'AI native business',
    subTitle: 'At the intersection of technology, business, and humanity, something magical happens.',
    imgSrc: '/assets/png/Genuine_human_reactions_to_new_technology_.png',
    smallDesImgSrc: '/assets/png/Genuine_human_reactions_to_new_technology_.png',
    mobileImgSrc: '/assets/png/Genuine_human_reactions_to_new_technology_.png',
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
