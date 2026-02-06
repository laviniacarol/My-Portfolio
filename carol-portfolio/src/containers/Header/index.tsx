import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const clickSound = new Audio("/click.mp3");

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();          
    e.stopPropagation();        
    clickSound.volume = 0.12;
    clickSound.currentTime = 0;
    clickSound.play();
    setOpen(false);
    navigate(path);
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
        onClick={() => setOpen(prev => !prev)}
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

      <nav
        className={`${styles.menu} ${open ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()} 
      >
        <a href="/" onClick={(e) => handleNav(e, "/")}>Home</a>
        <a href="/sobre" onClick={(e) => handleNav(e, "/sobre")}>Sobre mim</a>
        <a href="/formacao" onClick={(e) => handleNav(e, "/formacao")}>Formação</a>
        <a href="/inspo" onClick={(e) => handleNav(e, "/inspo")}>Inspirações</a>
        <a href="/tech" onClick={(e) => handleNav(e, "/tech")}>Tecnologias</a>
        <a href="/projects" onClick={(e) => handleNav(e, "/projects")}>Projetos</a>
        <a href="/contact" onClick={(e) => handleNav(e, "/contact")}>Contato</a>
      </nav>

    </header>
  );
}
