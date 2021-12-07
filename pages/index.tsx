import { Typography } from "@mui/material";
import React from "react";
import Blurb from "../components/Blurb/Blurb";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div>
      <NavBar links={["johan", "resume", "blog"]} />
      <div className={styles.container}>
        <div>
          <Header title="Johan" />
          <Blurb
            content={`A fullstack Software Engineer and lover of surf and the ocean.
      I possess a wide range of skills in mobile, web, robotics and databases.`}
          />
        </div>
        <figure>
          <img
            className={styles.ocean}
            alt="surf picture"
            src="/me_surf.jpeg"
          />
          <figcaption style={{ marginTop: 20 }}>
            <Typography color="secondary">
              Fun fact; this entire website was built using colours in the above
              image.
            </Typography>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
