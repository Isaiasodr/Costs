import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

function Linkbutton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}
export default Linkbutton;
