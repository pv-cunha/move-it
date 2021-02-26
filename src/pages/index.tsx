import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengeContexts';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { level, challengesCompleted, currentExperience } = props;

  return (
    <ChallengesProvider
      level={level}
      challengesCompleted={challengesCompleted}
      currentExperience={currentExperience}
    >
      <div className={`${styles.container} animeLeft`}>
        <Head>
          <title>Início | Move It</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  const { level, currentExperience, challengesCompleted } = cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
