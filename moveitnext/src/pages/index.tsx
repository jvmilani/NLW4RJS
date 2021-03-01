import Head from "next/head";
import {GetServerSideProps} from 'next';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import styles from "../styles/pages/Home.module.css";
import { CountDown } from "../components/CountDown";
import { ChallengeBox } from "../components/ChallengeBox";
import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps{
  level: number;
  currentExperience: number;
  challengeCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience = {props.currentExperience}
      challengeCompleted = {props.challengeCompleted}
    >

    <div className={styles.container}>
      <Head>
        <title>MoveIt | NEXT</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, challengeCompleted, currentExperience} = ctx.req.cookies;

  return {
    props: {
      level: +level,
      challengeCompleted: Number(challengeCompleted),
      currentExperience: Number(currentExperience)
    }
  };
};
