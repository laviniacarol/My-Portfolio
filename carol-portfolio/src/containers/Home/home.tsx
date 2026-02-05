import handImage from "../../assets/images/Hand.png";
import styles from "./Home.module.scss";
import Reveal from "../../components/Reveal/Reveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>

        <Reveal delay={0}>
          <h1 className={styles.name}>Carol Lavinia</h1>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className={styles.portfolio}>Portfólio</h2>
        </Reveal>

        <Reveal delay={0.24}>
          <div className={styles.subtitle}>
            <img
              src={handImage}
              alt="Mão segurando caneta"
              className={styles.hand}
            />
            <span>Engenheira de Software</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
