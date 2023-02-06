import { FiCommand } from "react-icons/fi";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div
      className={styles.loaderContainer}
      style={{
        textAlign: "center",
      }}
    >
      <FiCommand className="loading-icon" />
    </div>
  );
}
