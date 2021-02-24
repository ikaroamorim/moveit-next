import React from 'react';
import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile';
import { CompletedChalenges } from '../components/CompletedChallenges';

import styles from '../styles/components/Home.module.css'
import { Countdown } from '../components/Countdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Moveit</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChalenges />
          <Countdown />
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}
