import { Button } from "@/shared/ui/Button";

import FileIcon from "@/shared/assets/File.svg";

import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import { Comments } from "@/widgets/Comments";

import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { useEffect, useState } from "react";
import { Article as IArticle, ArticleService } from "@/entities/article";
import { PAGE_ROUTES, UPDATE_ARTICLE } from "@/shared/utils/constants";
import { useAppSelector, useSelectUser } from "@/app/redux";
import { NotificationService } from "@/shared/utils/notificationService";

export function Article() {
  const navigate = useNavigate();
  const location = useLocation();
  const articleId: string = location.state.articleId;
  const userId = useAppSelector(useSelectUser)?.sub as string;

  const [article, setArticle] = useState<IArticle | null>(null);
  const [favorites, setFavorites] = useState<IArticle[] | null>(null);

  const handleGoBack = () => {
    navigate(PAGE_ROUTES.HOME);
  };

  const getArticle = async () => {
    setArticle(null);
    const fav = await ArticleService.getFavorites(userId);
    const res = await ArticleService.getArticle(articleId);
    setArticle(res.data);
    setFavorites(fav.data);
  };

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    NotificationService.subscribe(UPDATE_ARTICLE, getArticle);

    return () => {
      NotificationService.unsubscribe(UPDATE_ARTICLE, getArticle);
    };
  }, []);

  const handleAddToFavorites = () => {
    ArticleService.addToFavorites(articleId, userId).then(() => {
      NotificationService.dispatchEvent(UPDATE_ARTICLE);
    });
  };

  if (!article || !favorites) {
    return "Loading...";
  }

  const isFavorite = favorites.filter((val) => val.id === article.id).length;

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
          <p>{article.author.email}</p>
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
          <Button
            color="yellow"
            colorStyle="outline"
            onClick={handleAddToFavorites}
            disabled={!!isFavorite}
          >
            В избранное
          </Button>
        </div>
        <Comments articleId={articleId} />
      </main>
    </>
  );
}
