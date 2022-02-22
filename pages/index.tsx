import React from "react";
import Blurb from "../components/Blurb/Blurb";
import PageTitle from "../components/PageTitle/PageTitle";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <PageTitle title="Johan" />
          <Blurb
            content={`A fullstack Software Engineer and lover of surf and the ocean.
      I possess a wide range of skills in mobile, web, robotics and databases.`}
          />
        </div>
        <figure>
          <img alt="surf picture" src="/me_surf.jpeg" />
          <figcaption style={{ marginTop: 20 }}>
            <p>
              Fun fact; this entire website was built using colours in the above
              image.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
