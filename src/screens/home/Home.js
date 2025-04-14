import { Suspense, lazy } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Header from 'components/header'
import Footer from 'components/footer'
// Use dynamic import for Feature component (below the fold)
const Feature = dynamic(() => import('components/feature'), {
  loading: () => <div>Loading...</div>,
  ssr: true
})
// Use dynamic import for FeatureGrid component (below the fold)
const FeatureGrid = dynamic(() => import('components/feature-grid'), {
  loading: () => <div>Loading...</div>,
  ssr: true
})

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <Head>
      <title>Zero One Labs</title>
      <meta name="description" content="Zero One Labs Landing Page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Header />
    <Feature />
    <FeatureGrid />
    <Footer />
  </div>
)

export default Home
