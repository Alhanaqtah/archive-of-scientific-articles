import { Button } from "@/shared/ui/Button";
import { Comment } from "@/widgets/Comment";

import styles from "./style.module.scss";
import SendIcon from "@/shared/assets/Send.svg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CommentService, Comment as IComment } from "@/entities/comment";
import { useAppSelector, useSelectUser } from "@/app/redux";

interface CommentsProps {
  articleId: string;
}

export function Comments({ articleId }: CommentsProps) {
  const userId = useAppSelector(useSelectUser)?.sub;
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [comment, setComment] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleToggleShow = () => {
    setShowComments((prev) => !prev);
  };

  const handleFetchComments = async () => {
    const res = await CommentService.getComments(articleId);
    setComments(res.data);
  };

  const handleSend = () => {
    if (!userId) {
      return;
    }

    CommentService.createComment({ text: comment, articleId, userId }).then(
      () => {
        handleFetchComments();
      }
    );
    setComment("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    handleFetchComments();
  }, []);

  if (!showComments) {
    return (
      <div className={styles.comments}>
        <Button onClick={handleToggleShow}>Показать комментарии</Button>
      </div>
    );
  }

  console.log(comments)

  return (
    <div className={styles.comments}>
      <Button onClick={handleToggleShow}>Закрыть комментарии</Button>
      {comments.length === 0 ? (
        <p>Комментариев нету</p>
      ) : (
        comments.map((comment) => <Comment key={comment.id} {...comment} />).reverse()
      )}
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
