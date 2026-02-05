import styles from "./Tech.module.scss";

import CSharpIcon from "../../assets/icons/csharp.svg";
import PostgresIcon from "../../assets/icons/postgresql.svg";
import ReactIcon from "../../assets/icons/react.svg";
import TypeScriptIcon from "../../assets/icons/typescript.svg";
import Node from "../../assets/icons/nodejs.svg";
import Net from "../../assets/icons/net.svg";

import Reveal from "../../components/Reveal/Reveal";

const Tecnologias: React.FC = () => {
  const techs = [
    { name: "C#", icon: CSharpIcon },
    { name: "PostgreSQL", icon: PostgresIcon },
    { name: "React", icon: ReactIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Node.js", icon: Node },
    { name: ".NET", icon: Net },
  ];

  return (
    <section className={styles.TecnologiasContainer}>
      
      <Reveal>
        <h1 className={styles.Title}>Tecnologias mais usadas</h1>
      </Reveal>

      <div className={styles.TechGrid}>
        {techs.map((tech, index) => (
          <Reveal
            key={tech.name}
            delay={0.12 + index * 0.08}
            gridItem
          >
            <div className={styles.TechCard}>
              <img src={tech.icon} alt={tech.name} />
              <span className={styles.TechName}>{tech.name}</span>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
};

export default Tecnologias;
