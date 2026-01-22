import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const clickSound = new Audio("/click.mp3");

  const toggleMenu = () => {
    clickSound.volume = 0.12;
    clickSound.currentTime = 0;
    clickSound.play();
    setOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className={styles.topBar}>
      <button
        className={`${styles.menuBtn} ${open ? styles.open : ""}`}
        aria-label="Menu"
        aria-expanded={open}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div
          className={`${styles.overlay} ${styles.overlayShow}`}
          onClick={() => setOpen(false)}
        />
      )}

      <nav className={`${styles.menu} ${open ? styles.show : ""}`}>
        <a onClick={() => setOpen(false)} href="#home">Home</a>
        <a onClick={() => setOpen(false)} href="#about">Sobre mim</a>
        <a onClick={() => setOpen(false)} href="#education">Formação</a>
        <a onClick={() => setOpen(false)} href="#inspo">Inspirações</a>
        <a onClick={() => setOpen(false)} href="#tech">Tecnologias</a>
        <a onClick={() => setOpen(false)} href="#projects">Projetos</a>
        <a onClick={() => setOpen(false)} href="#contact">Contato</a>
      </nav>

      <div className={styles.lang}>
        <span className={styles.arrow}>‹</span>
        <img
          src="https://flagcdn.com/w40/br.png"
          alt="Idioma português"
        />
      </div>
    </header>
  );
}
