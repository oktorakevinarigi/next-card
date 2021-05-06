import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async (context) => {
  const id = context.query.id
  const res = await fetch(`https://apigreetingcards.astra.co.id/api/greeting/greeting-card/${id}`)
  const { data } = await res.json()
  
  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  // const {data, error} = useSWR('http://52.237.73.240:9090/api/greeting/greeting-card/608fc6acf5daf21edf82715e', fectherFuc, { initialData: {data: {card: {title:''}}}, revalidateOnMount: true })
  console.log("data", data)

  return (
    <div>
      <Head>
        <title>Astra Greeting Card</title>
        
        <meta property="og:description" content={data.card.title} />
        <meta property="og:site_name" content="youtube" />
        <meta property="og:url" content={data.card.videoURL} />
        <meta property="og:title" content="Astra Greeting Card" />
        <meta property="og:image" content={data.card.thumbnails} />
        <meta property="og:type" content="video.other" />
        <meta property="og:video:url" content={data.card.videoURL} />
        <meta property="og:video:secure_url" content={data.card.videoURL} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:video:url" content={data.card.videoURL} />
        <meta property="og:video:secure_url" content={data.card.videoURL} />
        <meta property="og:video:type" content="application/x-shockwave-flash" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />

        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@youtube" />
        <meta name="twitter:title" content="Astra Greeting Card" />
        <meta name="twitter:description" content={data.card.title} />
        <meta name="twitter:image" content={data.card.thumbnails} />
        <meta name="twitter:player" content={data.card.videoURL} />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div style={{width:150, height:50}}>
          <Image src="/images/logo1.png" alt="astra" layout="responsive" width="150" height="50" />
        </div>
        <div style={{width:170, height:60}}>
          <Image src="/images/logo2.png" alt="astra" layout="responsive" width="170" height="60" />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.cardContent}>
						<div className={styles.cardContainer}>
              <div className={styles.cardVideoContainer}>
                <video id="myVideo" controls loop style={{width:'100%'}}>
                  <source src={data.card.videoURL} type="video/mp4" />
                </video>
              </div>
							<div
								style={{
									backgroundImage: `url(images/motif.png)`,
									width: "10%",
								}}
							/>
						</div>
            <div className={styles.cardMessage}>
              <div  className={styles.textDear}>Kepada {data.recipient.name}</div>
              <div className={styles.cardMessageContainer}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.body,
                  }}
                />
              </div>
              <div className={styles.textRegards}>Salam, <br /> {data.senderName}</div>
            </div>

					</div>
        </div>

        <footer className={styles.footer}>
          © PT Astra International Tbk. 2021
        </footer>

    </div>
  )
}