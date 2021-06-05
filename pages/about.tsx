import NavBar from "../components/NavBar/NavBar";

export default function About() {
  return (
    <div>
      <NavBar links={["johan.", "about.", "resume.", "blog."]}></NavBar>
      <h1>about.</h1>
    </div>
  );
}
