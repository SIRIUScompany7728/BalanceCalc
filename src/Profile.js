import styles from "./profiles.module.css";
import logo from "./logo.png";
import Home from "./Home.js";
import About from "/src/about/About.js";
import Projects from "/src/project/Projects.js";
import Team from "/src/team/Team.js";
import { useState } from "react";
export default function Profile({ setPage }) {
  const [pageHome, setPageHome] = useState("home");
  const [pageAbout, setPageAbout] = useState("about");
  const [pageProjects, setPageProjects] = useState("project");
  const [pageTeam, setPageTeam] = useState("team");
  if (pageHome === "Home") {
    return <Home setPageHome={setPageHome} />;
  } else if (pageAbout === "About") {
    return <About setPageAbout={setPageAbout} />;
  } else if (pageProjects === "Projects") {
    return <Projects setPageProjects={setPageProjects} />;
  } else if (pageTeam === "Team") {
    return <Team setPageTeam={setPageTeam} />;
  }
  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <div className={styles.hdtxt}>
          <h3 onClick={() => setPageHome("Home")}>Home</h3>
          <h3 onClick={() => setPageAbout("About")}>About</h3>
          <h3 onClick={() => setPageProjects("Projects")}>Projects</h3>
          <h3 onClick={() => setPageTeam("Team")}>Team</h3>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} className={styles.loco} />
        </div>
        <div className={styles.txt}>
          <h1>WebApp & Technology</h1>
          <h2>Development Company</h2>
        </div>
      </div>
    </div>
  );
}
