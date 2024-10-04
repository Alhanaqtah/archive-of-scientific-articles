import { Button } from "@/shared/ui/Button";
import { Comment } from "@/widgets/Comment";

import styles from "./style.module.scss";
import SendIcon from "@/shared/assets/Send.svg";
import { ChangeEvent, useRef, useState } from "react";

const comments = [
  {
    id: 1,
    author: "Denis Pupkin",
    publishDate: "20.02.2002",
    content:
      "Текст комментария тоже ограничен в символах и может переноситься на вторую строку расширяя контейнер примерно вот таким образом",
  },
  {
    id: 2,
    author: "Denis Pupkin",
    publishDate: "20.02.2002",
    content:
      "Текст комментария тоже ограничен в символах и может переноситься на вторую строку расширяя контейнер примерно вот таким образом",
  },
  {
    id: 4,
    author: "Denis Pupkin",
    publishDate: "20.02.2002",
    content:
      "Текст комментария тоже ограничен в символах и может переноситься на вторую строку расширяя контейнер примерно вот таким образом",
  },
  {
    id: 5,
    author: "Denis Pupkin",
    publishDate: "20.02.2002",
    content:
      "Текст комментария тоже ограничен в символах и может переноситься на вторую строку расширяя контейнер примерно вот таким образом",
  },
];

export function Comments() {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comment, setComment] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleToggleShow = () => {
    setShowComments((prev) => !prev);
  };

  const handleSend = () => {
    console.log("send: ", comment);
    setComment("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  if (!showComments) {
    return (
      <div className={styles.comments}>
        <Button onClick={handleToggleShow}>Показать комментарии</Button>
      </div>
    );
  }

  return (
    <div className={styles.comments}>
      <Button onClick={handleToggleShow}>Закрыть комментарии</Button>
      {comments.map(({ id, author, publishDate, content }) => (
        <Comment
          key={id}
          author={author}
          publishDate={publishDate}
          content={content}
        />
      ))}
      <div className={styles.textBar} onClick={handleFocus}>
        <input
          type="text"
          placeholder="Введите комментарий"
          ref={inputRef}
          value={comment}
          onChange={handleChange}
        />
        <img src={SendIcon} alt="send icon" onClick={handleSend} />
      </div>
    </div>
  );
}
