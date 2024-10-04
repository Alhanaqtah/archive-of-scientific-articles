import styles from "./style.module.scss";

interface CommentProps {
  author: string;
  publishDate: string;
  content: string;
}

export function Comment({ author, publishDate, content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <span className={styles.name}>{author}</span>
      <span className={styles.date}>{publishDate}</span>
      <p>{content}</p>
    </div>
  );
}
