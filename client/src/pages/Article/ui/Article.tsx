import { Button } from "@/shared/ui/Button";

import FileIcon from "@/shared/assets/File.svg";

import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import { Comments } from "@/widgets/Comments";

import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { useEffect, useState } from "react";
import { Article as IArticle, ArticleService } from "@/entities/article";

export function Article() {
  const navigate = useNavigate();
  const location = useLocation();
  const articleId: string = location.state.id;

  const [article, setArticle] = useState<IArticle | null>(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  const getArticle = async (articleId: string) => {
    const res = await ArticleService.getArticle(articleId);
    setArticle(res.data);
  };

  useEffect(() => {
    getArticle(articleId);
  }, [articleId]);

  if (!article) {
    return "Loading...";
  }

  return (
    <>
      <Header />

      <main className={styles.articlesPage}>
        <h1>{article.title}</h1>
        <p>{article.annotation}</p>
        <div className={styles.fileDownload}>
          <h2>Название файла с полной статьей.pdf</h2>
          <Button>
            <img src={FileIcon} alt="file icon" />
          </Button>
        </div>
        <div className={styles.credits}>
          <p>{article.author}</p>
          <p>{article.sci_area}</p>
          <p>{article.created_at}</p>
        </div>
        <div className={styles.keywords}>
          {article.keywords.map((keyword) => (
            <Keyword>{keyword}</Keyword>
          ))}
        </div>
        <div className={styles.buttons}>
          <Button onClick={handleGoBack}>Назад</Button>
          <Button color="yellow" colorStyle="outline">
            В избранное
          </Button>
        </div>
        <Comments />
      </main>
    </>
  );
}
