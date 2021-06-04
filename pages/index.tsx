import React from "react";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <NavBar links={["johan.", "about.", "resume.", "blog."]}></NavBar>
      <h1 className={styles.title}>johan.</h1>
      <h2 className={styles.subtitle}>I am a second heading.</h2>
      <p>I am a paragraph.</p>
      <p>I am a paragraph.</p>
    </div>
  );
}
