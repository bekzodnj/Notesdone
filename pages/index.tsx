import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Navbar } from '../components/Navbar';

import { Lexend } from '@next/font/google';
// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notesdone - create your notes</title>
        <meta name='description' content='Note taking app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={'h-screen ' + lexend.className}>
        <Navbar />
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
