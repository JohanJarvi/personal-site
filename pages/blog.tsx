import React from "react";
import NavBar from "../components/NavBar/NavBar";

export default function Blog() {
  return (
    <div>
      <NavBar links={["johan.", "about.", "resume.", "blog."]}></NavBar>
      <h1>blog.</h1>
    </div>
  );
}
