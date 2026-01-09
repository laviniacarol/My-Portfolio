
import handImage from "../../assets/images/Hand.png";

import styles from "./Home.module.scss";

export default function Hero() {
  return (

    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>Carol Lavinia.</h1>
        <h2 className={styles.portfolio}>Portfólio</h2>

        <div className={styles.subtitle}>
          <img
            src={handImage}
            alt="Mão segurando caneta"
            className={styles.hand}
          />
          <span>Engenheira de Software</span>
        </div>
      </div>

      <button className={styles.next} aria-label="Próximo">
        ›
      </button>
    </section>
  );
}
