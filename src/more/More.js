import styles from "./moree.module.css";
import { FaInstagram } from "react-icons/fa";
export default function More({ setPage }) {
  return (
    <div className={styles.bdyMore}>
      <header className={styles.HDmore}>
        <div className={styles.HDmoretxt}>
          <h2 className={styles.heading}>Do You Want to Know Our Journey?</h2>
          <p1 className={styles.paragf}>This is The Journey of Sirius</p1>
          <p1 className={styles.paragf}>
            We have a clear purpose behind building this
          </p1>
        </div>
      </header>
      <div className={styles.Info}>
        <div className={styles.Info1}>
          <h3>Why We Built This?</h3>
        </div>
        <div className={styles.Info2}>
          <p1>
            We created Sirius Company to help people through technology—making
            everyday life easier without replacing the role of people
            themselves. We believe technology should empower individuals, not
            make them dependent on it. That is why we continue to innovate,
            creating solutions that bring a positive impact to everyone.
          </p1>
        </div>
      </div>
      <div className={styles.Info3}>
        <h3>What We Aim For?</h3>
        <div className={styles.Info4}>
          <p1>
            At Sirius Company, our goal is to create technology that makes a
            meaningful difference in people's lives. We are proud to build our
            own products in Indonesia, entirely created by Indonesian talent. We
            believe great technology should be accessible to everyone, which is
            why we design our solutions to be simple, intuitive, and easy to
            use—even for people with no technical background. Through continuous
            innovation, we hope our work brings lasting value to communities
            both in Indonesia and beyond.
          </p1>
        </div>
        <div className={styles.Info5}>
          <FaInstagram className={styles.Instagram} />
          <span>siriuscompany.inc</span>
        </div>
      </div>
    </div>
  );
}
