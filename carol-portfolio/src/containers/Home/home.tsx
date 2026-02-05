import handImage from "../../assets/images/Hand.png";
import styles from "./Home.module.scss";
import Reveal from "../../components/Reveal/Reveal";

export default function Hero() {
  return (
     <Reveal>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={`${styles.name} ${styles.reveal1}`}>Carol Lavinia</h1>
        <h2 className={`${styles.portfolio} ${styles.reveal2}`}>Portfólio</h2>

      <div className={`${styles.subtitle} ${styles.reveal3}`}>
          <img
            src={handImage}
            alt="Mão segurando caneta"
            className={styles.hand}
          />
          <span>
            Engenheira de Software
          </span>

        </div>
      </div>
    </section>
    </Reveal>
  );
}
