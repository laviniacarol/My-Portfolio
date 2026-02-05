import { type ReactNode } from "react";
import { useScrollReveal } from "../../hooks/userScrollReveal";
import styles from "./Reveal.module.scss";

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
}
