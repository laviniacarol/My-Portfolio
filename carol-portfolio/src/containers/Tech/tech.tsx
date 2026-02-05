import React from 'react';
import styles from './Tech.module.scss';

import CSharpIcon from '../../assets/icons/csharp.svg';
import PostgresIcon from '../../assets/icons/postgresql.svg';
import ReactIcon from '../../assets/icons/react.svg';
import TypeScriptIcon from '../../assets/icons/typescript.svg';
import Node from '../../assets/icons/nodejs.svg';
import Net from '../../assets/icons/net.svg';

const Tecnologias: React.FC = () => {
  const techs = [
    { name: 'C#', icon: CSharpIcon },
    { name: 'PostgreSQL', icon: PostgresIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'Node.js', icon: Node },
    { name: '.NET', icon: Net },
  ];



  return (
    <div className={styles.TecnologiasContainer}>

      <h1 className={styles.Title}>Tecnologias mais usadas</h1>

      <div className={styles.TechGrid}>
        {techs.map((tech) => (
          <div key={tech.name} className={styles.TechCard}>
            <img src={tech.icon} alt={tech.name} />
            <span className={styles.TechName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
