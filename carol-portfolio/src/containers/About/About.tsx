import MyImage from '../../assets/images/Carol.png';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.AboutSection}>

      <div className={styles.MainRow}>
        <div className={styles.Content}>
          <h1 className={styles.Who}>Quem sou eu?</h1>
          <h2 className={styles.Nerd}>Eu sou uma nerd</h2>
          <span className={styles.Parenthesis}>(como voce pode ver)</span>

          <div className={styles.MainContent}>
            e muito do que diferencia o meu trabalho é justamente sobre 
            ser apaixonada pelo meu nicho e gostar de misturar conhecimento
            teórico com ideias criativas.
            <br />
            Para mim, esse é o real significado de inovação
            e o sentido da tecnologia.
          </div>
        </div>

        <div className={styles.ImageContainer}>
          <img 
            src={MyImage} 
            alt="Foto Carol Lavinia" 
            className={styles.Image}
          />
        </div>
      </div>

      <div className={styles.Arrows}>
        <button className={styles.Arrow}>‹</button>
        <button className={styles.Arrow}>›</button>
      </div>

    </section>
  );
}
