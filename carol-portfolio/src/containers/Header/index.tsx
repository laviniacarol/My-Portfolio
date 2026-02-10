import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const clickSound = new Audio("/click.mp3");

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    clickSound.volume = 0.12;
    clickSound.currentTime = 0;
    clickSound.play();

    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className={styles.topBar}>
      <button
        className={`${styles.menuBtn} ${open ? styles.open : ""}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={`${styles.menu} ${open ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <a href="#home" onClick={(e) => handleNav(e, "home")}>Home</a>
        <a href="#about" onClick={(e) => handleNav(e, "about")}>Sobre mim</a>
        <a href="#education" onClick={(e) => handleNav(e, "education")}>Formação</a>
        <a href="#inspo" onClick={(e) => handleNav(e, "inspo")}>Inspirações</a>
        <a href="#tech" onClick={(e) => handleNav(e, "tech")}>Tecnologias</a>
        <a href="#contact" onClick={(e) => handleNav(e, "contact")}>Contato</a>
      </nav>
    </header>
  );
}
