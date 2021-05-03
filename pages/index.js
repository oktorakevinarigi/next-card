import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Astra Greeting Card</title>
        
        <meta property="og:description" content="Selamat Idul Fitri 1442H" />
        <meta property="og:site_name" content="YouTube" />
        <meta property="og:url" content="https://www.youtube.com/watch?v=ih2xubMaZWI" />
        <meta property="og:title" content="OMFG - Hello" />
        <meta property="og:image" content="https://i.ytimg.com/vi/ih2xubMaZWI/maxresdefault.jpg" />
        <meta property="og:type" content="video.other" />
        <meta property="og:video:url" content="https://www.youtube.com/embed/ih2xubMaZWI" />
        <meta property="og:video:secure_url" content="https://www.youtube.com/embed/ih2xubMaZWI" />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:video:url" content="http://www.youtube.com/v/ih2xubMaZWI?version=3&amp;autohide=1" />
        <meta property="og:video:secure_url" content="https://www.youtube.com/v/ih2xubMaZWI?version=3&amp;autohide=1" />
        <meta property="og:video:type" content="application/x-shockwave-flash" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />

        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@youtube" />
        <meta name="twitter:title" content="OMFG - Hello" />
        <meta name="twitter:description" content="Selamat Idul Fitri 1442H" />
        <meta name="twitter:image" content="https://i.ytimg.com/vi/ih2xubMaZWI/maxresdefault.jpg" />
        <meta name="twitter:player" content="https://www.youtube.com/embed/qvK1DCJvuek" />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
