import styles from "./Inspo.module.scss";

import Curie from "../../assets/images/Curie.svg";
import Woolf from "../../assets/images/Woolf.svg";
import Nina from "../../assets/images/Nina.svg";
import Alan from "../../assets/images/Alan.svg";
import Hamilton from "../../assets/images/Hamilton.svg";

import Reveal from "../../components/Reveal/Reveal";

export default function Inspo() {
  return (
    <section className={styles.hero}>
      
      <Reveal>
        <h1 className={styles.title}>Algumas Inspirações. . .</h1>
      </Reveal>

      <div className={styles.grid}>
        <Reveal delay={0.1}>
          <div className={styles.card}>
            <img src={Woolf} alt="Virginia Woolf" />
            <p>Virginia Woolf</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className={styles.card}>
            <img src={Hamilton} alt="Margaret Hamilton" />
            <p>Margaret Hamilton</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className={styles.card}>
            <img src={Nina} alt="Nina Simone" />
            <p>Nina Simone</p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className={styles.card}>
            <img src={Curie} alt="Marie Curie" />
            <p>Marie Curie</p>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className={styles.card}>
            <img src={Alan} alt="Alan Turing" />
            <p>Alan Turing</p>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
