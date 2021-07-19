import React from "react";
import Blurb from "../components/Blurb/Blurb";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div>
      <NavBar links={["johan", "about", "resume", "blog"]} />
      <div className={styles.container}>
        <div>
          <Header title="Johan" />
          <Blurb
            content={`A fullstack Software Engineer and lover of surf and the ocean.
      I possess a wide range of skills in mobile, web, robotics and databases.`}
          />
        </div>
        <img className={styles.ocean} alt="surf picture" src="/me_surf.jpeg" />
      </div>
    </div>
  );
}
