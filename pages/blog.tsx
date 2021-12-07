import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

export default function Blog() {
  return (
    <div>
      <NavBar links={["johan", "resume", "blog"]} />
      <Header title="Coming soon." />
    </div>
  );
}
