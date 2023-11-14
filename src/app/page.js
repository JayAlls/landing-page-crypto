import MainBanner from './component/MainBanner/MainBanner'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainBanner />
      <div className={styles.circleblur1}></div>
      <div className={styles.circleblur2}></div>
    </main>
  )
}
