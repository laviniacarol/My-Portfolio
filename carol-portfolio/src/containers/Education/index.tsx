import styles from './Education.module.scss';

export default function Education() {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.title}>Formação Superior</h1>

      <p className={styles.description}>
        Bacharelado em Engenharia de Software pela UNOPAR, com foco em
        desenvolvimento, arquitetura e qualidade de sistemas.
        <br />
        <span>(2022 — julho de 2026)</span>
      </p>

      <h2 className={styles.subtitle}>Principais disciplinas cursadas:</h2>

      <ul className={styles.description}>
        <li>Desenvolvimento de E-commerce com CMS</li>
        <li>Infraestrutura Ágil</li>
        <li>Frameworks para Desenvolvimento de Software (Java e Spring)</li>
        <li>Arquitetura de Software</li>
        <li>Segurança e Auditoria de Sistemas</li>
      </ul>

      <div className={styles.Arrows}>
        <button className={styles.Arrow}>‹</button>
        <button className={styles.Arrow}>›</button>
      </div>
    </section>
  );
}


    

