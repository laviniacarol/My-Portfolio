import styles from "./Contact.module.scss";

import github from "../../assets/icons/github.jpg";
import computer from "../../../assets/icons/computer.png";
import linkedin from "../../assets/icons/linkedin.svg";

import Reveal from "../../components/Reveal/Reveal";

export default function Contact() {
  return (
    <section className={styles.container}>
      
      <Reveal>
        <h1 className={styles.title}>Entre em contato…</h1>
      </Reveal>

      <Reveal delay={0.08}>
        <p className={styles.text}>
          Entre em contato comigo se houver algo que eu possa fazer
          pela sua empresa ou se você, desenvolvedor, tem algum projeto
          em que eu possa te auxiliar.
        </p>
      </Reveal>

      <div className={styles.icons}>
        <Reveal gridItem delay={0.14}>
          <a
            href="https://github.com/laviniacarol"
            target="_blank"
            rel="noreferrer"
            className={styles.iconItem}
          >
            <img src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </Reveal>

        <Reveal gridItem delay={0.22}>
          <a
            href="mailto:dev.laviniacarol@gmail.com"
            className={styles.iconItem}
          >
            <img src={computer} alt="Gmail" />
            <span>Gmail</span>
          </a>
        </Reveal>

        <Reveal gridItem delay={0.30}>
          <a
            href="https://www.linkedin.com/in/carol-lavinia-166410287/"
            target="_blank"
            rel="noreferrer"
            className={`${styles.iconItem} ${styles.linkedin}`}
          >
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.38}>
        <h2 className={styles.signature}>Ass. Carol</h2>
      </Reveal>

    </section>
  );
}
