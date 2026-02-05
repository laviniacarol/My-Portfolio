import { type ReactNode } from "react";
import { useScrollReveal } from "../../hooks/userScrollReveal";
import styles from "./Reveal.module.scss";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  gridItem?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  gridItem = false,
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        ${styles.reveal}
        ${visible ? styles.visible : ""}
        ${gridItem ? styles.revealGrid : ""}
      `}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
