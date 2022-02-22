import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import NavBar from "../components/NavBar/NavBar";

export default function Blog() {
  return (
    <div>
      <NavBar />
      <div className="under-navbar">
        <PageTitle title="Coming soon." />
      </div>
    </div>
  );
}
