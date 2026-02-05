import MyImage from "../../assets/images/Carol.jpeg";
import styles from "./About.module.scss";

import Reveal from "../../components/Reveal/Reveal";
import { useParallax } from "../../hooks/useParallax";

export default function About() {
  const imageOffset = useParallax(0.12);

  return (
    <section className={styles.AboutSection}>
      <div className={styles.MainRow}>

        <div className={styles.Content}>
          <Reveal>
            <h1 className={styles.Who}>Quem sou eu?</h1>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className={styles.Nerd}>Carol Lavinia</h2>
          </Reveal>

          <Reveal delay={0.2}>
            <span className={styles.Parenthesis}>
              (uma nerd, como voce pode ver)
            </span>
          </Reveal>

          <Reveal delay={0.32}>
            <div className={styles.MainContent}>
              e muito do que diferencia o meu trabalho é justamente sobre
              ser apaixonada pelo meu nicho e gostar de misturar conhecimento
              teórico com ideias criativas.
              <br />
              Para mim, esse é o real significado de inovação
              e o sentido da tecnologia.
            </div>
          </Reveal>
        </div>

        <div
          className={styles.ImageContainer}
          style={{ transform: `translateY(${imageOffset}px)` }}
        >
          <img
            src={MyImage}
            alt="Foto Carol Lavinia"
            className={styles.Image}
          />
        </div>

      </div>
    </section>
  );
}
