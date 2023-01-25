import styles from "./dreamCard.module.css";
import { FiTrash, FiEdit2 } from "react-icons/fi";

export function DreamCard({ item, deleteHandler }) {
  return (
    <article className={styles.cardContainer}>
      <img className={styles.cardImage} src={item.img} alt={item.title} />
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <div className={styles.actionIcons}>
        <FiTrash
          color="white"
          size={"15px"}
          onClick={() => deleteHandler(item.id)}
        />
        <FiEdit2
          color="white"
          size={"15px"}
          onClick={() => deleteHandler(item.id)}
        />
      </div>
    </article>
  );
}
