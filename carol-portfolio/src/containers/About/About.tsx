import React from 'react';
import MyImage from '../../assets/images/Carol.jpeg';
import styles from './About.module.scss';

import Reveal from "../../components/Reveal/Reveal";

export default function About() {
 

  return (
    <Reveal>
    <section className={styles.AboutSection}>
    

      <div className={styles.MainRow}>
        <div className={`${styles.Content} ${styles.fadeInUp}`}>
          <h1 className={styles.Who}>Quem sou eu?</h1>
          <h2 className={styles.Nerd}>Carol Lavinia</h2>
          <span className={styles.Parenthesis}>(uma nerd, como voce pode ver)</span>

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

    </section>
    </Reveal>
  );
}
