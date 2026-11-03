import styles from "./profiles.module.css";
export default function Home({ setPageHome }) {
  return (
    <div className={styles.body}>
      <header className={styles.HD}>
        <div className={styles.hometxt}>
          <h1 className={styles.hometxt1}>We Building Inovation and</h1>
          <h2 className={styles.hometxt2}>Solution with Technology</h2>
        </div>
      </header>
      <div className={styles.bodyhome}>
        <div className={styles.bodyhometxt}>
          <h4 className={styles.bodyhometxt1}>
            Developing WebApps & Technology
          </h4>
          <p>
            Our flagship innovation, BalanceCalc is our first product designed
            to simplify debit and credit calculation for individual businesses
            and small-scale enterprises (MSMEs.)
          </p>
        </div>
        <div className={styles.bodyhometxt2}>
          <h4 className={styles.bodyhometxt3}>Providing Convenience</h4>
          <p>
            We've simplified our calculator simplify so that users can calculate
            easily and save their time.
          </p>
        </div>
        <div className={styles.bodyhometxt4}>
          <h4 className={styles.bodyhometxt5}>Solving Their Problems</h4>
          <p>
            Solving bookkeeping challenges for those who are less teach-savvy.
          </p>
        </div>
      </div>
    </div>
  );
}
