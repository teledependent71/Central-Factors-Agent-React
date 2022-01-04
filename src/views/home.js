import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Central Factors Agent</title>
        <meta property="og:title" content="Central Factors Agent" />
      </Helmet>
    </div>
  )
}

export default Home
