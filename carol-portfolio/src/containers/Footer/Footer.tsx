import styles from "./Footer.module.scss";
import Reveal from "../../components/Reveal/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Reveal>
        <div className={styles.content}>
          <p className={styles.name}>Carol Lavinia</p>

          <nav className={styles.links}>
            <a
              href="https://github.com/laviniacarol"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/carol-lavinia-166410287/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:dev.laviniacarol@gmail.com">
              Email
            </a>
          </nav>

          <span className={styles.copy}>
            © {year}
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
