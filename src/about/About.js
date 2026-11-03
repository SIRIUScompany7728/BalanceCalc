import styles from "./uber.module.css";
import Vision from "./Vision.png";
import Mission from "./Mission.png";
export default function Home({ setPageHome }) {
  return (
    <div className={styles.bdy}>
      <header className={styles.top1}>
        <div className={styles.toptxt}>
          <h1 className={styles.top_txt}>You want to Know</h1>
          <h2 className={styles.top_txt1}>About Us</h2>
          <div className={styles.top_paragf}>
            <p>Founded in 2026</p>
            <p>Focusing in WebApp and Technology</p>
            <p>Development to Facilitate people, we</p>
            <p>will continue to innovate for you.</p>
          </div>
        </div>
      </header>
      <div className={styles.vision}>
        <img src={Vision} width="280" />
        <h3>1. To create technology that empowers people</h3>
        <h3>2. To build innovative technology that helps people grow</h3>
      </div>
      <div className={styles.mission}>
        <img src={Mission} width="280" />
        <h3>
          1. Develop technology that empowers people without creating
          unnecessary dependence.
        </h3>
        <h3>2. Build innovative solutions that solve real-world problems.</h3>
        <h3>
          3. Design technology that is simple, accessible, and understandable
          for everyone.
        </h3>
        <h3>
          4. Create products that support and enhance human capabilities rather
          than replace people or existing technologies.
        </h3>
      </div>
    </div>
  );
}
