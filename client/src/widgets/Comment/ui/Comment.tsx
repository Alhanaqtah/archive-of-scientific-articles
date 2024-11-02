import { Comment as IComment } from "@/entities/comment";
import styles from "./style.module.scss";

export function Comment({ author, created_at, text }: IComment) {
  let [date, time] = created_at.split("T");
  time = time.split(".")[0];

  return (
    <div className={styles.comment}>
      <span className={styles.name}>{author}</span>
      <span className={styles.date}>
        {date} {time}
      </span>
      <p>{text}</p>
    </div>
  );
}
