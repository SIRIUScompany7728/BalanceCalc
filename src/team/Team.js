import styles from "./teame.module.css";
import { FaInstagram } from "react-icons/fa";
import John from "./John.jpeg";
import Jeff from "./Jeff.jpeg";
export default function Team({ setPageTeam }) {
  return (
    <div className={styles.teambdy}>
      <div className={styles.ourteam}>
        <h1>OUR TEAM</h1>
      </div>
      <div className={styles.images}>
        <div className={styles.members}>
          <img src={John} width="200" height="200" />
          <h1>Jonathan Michael</h1>
          <h2 className={styles.position}>Founder & Back-end Dev</h2>
          <div className={styles.Ig}>
            <FaInstagram className={styles.IG} />
            <span>Nate_760704</span>
          </div>
        </div>
        <div className={styles.members}>
          <img src={Jeff} width="200" height="200" />
          <h1>Jefferson Michael</h1>
          <h2 className={styles.position}>
            Front-end, Animation Effect, UI/UX Concept & Web Architect
          </h2>
          <div className={styles.Insta}>
            <FaInstagram className={styles.IG} />
            <span>Jefflash29</span>
          </div>
        </div>
      </div>
    </div>
  );
}
