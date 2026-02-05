import styles from './Inspo.module.scss'

import Curie from '../../assets/images/Curie.svg'
import Woolf from '../../assets/images/Woolf.svg'
import Nina from '../../assets/images/Nina.svg'
import Alan from '../../assets/images/Alan.svg'
import Hamilton from '../../assets/images/Hamilton.svg'

export default function Inspo() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Algumas Inspirações. . .</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={Woolf} alt="Virginia Woolf" />
          <p>Virginia Woolf</p>
        </div>

        <div className={styles.card}>
          <img src={Hamilton} alt="Margaret Hamilton" />
          <p>Margaret Hamilton</p>
        </div>

        <div className={styles.card}>
          <img src={Nina} alt="Nina Simone" />
          <p>Nina Simone</p>
        </div>

        <div className={styles.card}>
          <img src={Curie} alt="Marie Curie" />
          <p>Marie Curie</p>
        </div>

        <div className={styles.card}>
          <img src={Alan} alt="Alan Turing" />
          <p>Alan Turing</p>
        </div>
      </div>



    </section>
  )
}
