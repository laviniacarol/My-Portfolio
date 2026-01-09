   import styles from "./Header.module.scss";
   

   export default function Header() {
     return (
   <header className={styles.topBar}>
        <button className={styles.menuBtn} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>

        <div className={styles.lang}>
          <span className={styles.arrow}>‹</span>
          <img
            src="https://flagcdn.com/w40/br.png"
            alt="Idioma português"
          />
        </div>
      </header>
     )
    };