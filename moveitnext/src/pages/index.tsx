import { ExperienceBar } from '../components/ExperienceBar'
import {Profile} from '../components/Profile'
import {CompletedChallenges} from '../components/CompletedChallenges'
import styles from '../styles/pages/Home.module.css'
import { CountDown } from '../components/CountDown'
import Head from 'next/head';

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>MoveIt | NEXT</title>
    </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
        </div>
        <div></div>
      </section>
    </div>

  )
}
