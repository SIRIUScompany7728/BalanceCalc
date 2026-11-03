import styles from "./projekt.module.css";
import Calc from "./Calc.png";
export default function Projects({ setPageProjects }) {
  return (
    <div className={styles.bdy2}>
      <header className={styles.HD3}>
        <div className={styles.HD3txt}>BalanceCalc</div>
        <div className={styles.HD3txt2}>
          <p>Inovation of Accounting Calculator</p>
        </div>
        <div className={styles.HD3paragf}>
          <ul>
            <li>
              <p>Calculate debit and credit</p>
            </li>
            <li>
              <p>Instantly view total income and expenses</p>
            </li>
            <li>
              <p>Create journal entries for You</p>
            </li>
            <li>
              <p>enjoy using our application</p>
            </li>
          </ul>
        </div>
      </header>
      <div className={styles.imgcalc}>
        <img src={Calc} width="300" />
      </div>
      <div className={styles.NameApp}>
        <h2>BalanceCalc</h2>
      </div>
      <div className={styles.owner}>
        <p>Created by Sirius</p>
      </div>
    </div>
  );
}
